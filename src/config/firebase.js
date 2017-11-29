import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCxs0VfZMOMPENvXRvr_MiFmpSk8IFxWSA",
    authDomain: "cakes-fdeb7.firebaseapp.com",
    databaseURL: "https://cakes-fdeb7.firebaseio.com",
    projectId: "cakes-fdeb7",
    storageBucket: "cakes-fdeb7.appspot.com",
    messagingSenderId: "1020617398636"
};

const fire = firebase.initializeApp(config);

export default fire;