// Import des modules nécessaires pour Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore}  from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Configuration de l'application Firebase
const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialisation de l'application Firebase avec la configuration
const app = initializeApp(firebaseConfig);

// Récupération du service d'authentification Firebase
const auth = getAuth(app);

// Récupération du service de stockage Firebase
const storage = getStorage(app);

// Récupération du service Firestore Firebase
const db = getFirestore(app);

// Export des services d'authentification, de stockage, de Firestore et de l'application Firebase
export { auth, app, storage, db };
