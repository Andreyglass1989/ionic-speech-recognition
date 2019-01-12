https://ionicframework.com/docs/native/speech-recognition/

1. Start new blank project:
	ionic start speech_recognition(name_project) blank

2. Install packaging:
	ionic cordova plugin add cordova-plugin-speechrecognition
	npm install --save @ionic-native/speech-recognition
	npm install @ionic/lab
	ionic lab

3. Add in app.module:

	import { SpeechRecognition } from '@ionic-native/speech-recognition';

	  providers: [
....
    SpeechRecognition,


4. 