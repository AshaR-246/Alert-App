import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB2UVGrQmmxC9T52QhesXoxoBeTvEERgCo",
  authDomain: "wireless-buzzer-53c84.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-53c84.firebaseio.com",
  projectId: "wireless-buzzer-53c84",
  storageBucket: "wireless-buzzer-53c84.appspot.com",
  messagingSenderId: "6678660152",
  appId: "1:6678660152:web:5580a8426ed679266712cd",
  measurementId: "G-05RSYTSR6L"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()
