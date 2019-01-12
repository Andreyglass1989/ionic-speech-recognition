import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ChangeDetectorRef } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	matches: String[];
	isRecording = false;

  constructor(public navCtrl: NavController, 
  			  private plt: Platform, private speechRecognition: SpeechRecognition,
  			  private cd: ChangeDetectorRef) {

  }

  startListening(){
  	let options = {
  		language: 'en-US'
  	}
  	this.speechRecognition.startListening().subscribe(matches =>{
  		this.matches = matches;
  		this.cd.detectChanges();
  	});

  	this.isRecording = true;
  }

  stopListening(){
  	this.speechRecognition.stopListening().then(() =>{
  		this.isRecording = false;
  	});
  }

  getPermission(){
  	this.speechRecognition.hasPermission()
  	.then((hasPermission: boolean) =>{
  		if(!hasPermission){
  			this.speechRecognition.requestPermission();
  		}
  	})
  }

  isIos(){
  	return this.plt.is('ios');

  }

  SupportedLanguages(){
  	this.speechRecognition.getSupportedLanguages()
  .then(
    (languages: Array<string>) => console.log(languages),
    (error) => console.log(error)
  )
  }

}
