import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyAdvKZCZ8A13RKxEPrD7qN3ftDeUUWmZfw",
    authDomain: "personalwebsite-6c736.firebaseapp.com",
    projectId: "personalwebsite-6c736",
    storageBucket: "personalwebsite-6c736.firebasestorage.app",
    messagingSenderId: "53900493682",
    appId: "1:53900493682:web:1557f34c5ff3f7ce89d3eb",
    measurementId: "G-ML52S2Z326"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 🔹 Function to save form data to Firestore
window.saveFormData = (formData) => {
    console.log("Saving data to Firestore:", formData);

    return db.collection("subscriptions").add(formData)
        .then(() => {
            console.log("Form submitted successfully!");
            return true;
        })
        .catch((error) => {
            console.error("Error submitting form: ", error);
            return false;
        });
};