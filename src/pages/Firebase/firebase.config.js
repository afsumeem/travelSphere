//firebase configuration

// const firebaseConfig = {
//     apiKey: "AIzaSyA6TNB-0VFzZLLfXENH4pgTgmp85GVGZuA",
//     authDomain: "travel-sphere.firebaseapp.com",
//     projectId: "travel-sphere",
//     storageBucket: "travel-sphere.appspot.com",
//     messagingSenderId: "722062954237",
//     appId: "1:722062954237:web:d1d3c773d1d0d13d58b894"
// };

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

export default firebaseConfig;
