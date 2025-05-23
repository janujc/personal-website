const firebaseConfig = {
    apiKey: "AIzaSyB69Eoy5mc6CME4IvrOKtp2SK4b7P1_Qpk",
    authDomain: "januario-website.firebaseapp.com",
};

// Initialize Firebase using the global firebase from CDN
if (!window.firebase.apps?.length) {
  window.firebase.initializeApp(firebaseConfig);
}

export const auth = window.firebase.auth();
