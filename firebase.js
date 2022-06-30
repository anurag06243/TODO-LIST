const firebaseConfig = {
  apiKey: "AIzaSyBLWgo7Yk8Ki-fiGdox9ULKFKzzALD9ynk",
  authDomain: "to-do-10de6.firebaseapp.com",
  projectId: "to-do-10de6",
  storageBucket: "to-do-10de6.appspot.com",
  messagingSenderId: "278145367764",
  appId: "1:278145367764:web:da76292aa60de79b780541",
  measurementId: "G-E4GS3W68VM",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
