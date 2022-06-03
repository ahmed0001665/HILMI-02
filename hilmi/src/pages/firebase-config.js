
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
const firebaseConfig = {

    apiKey: "AIzaSyDO1_Iw6OIQErlymsLzzaOvdsxD18NmZIg",
  
    authDomain: "my-digital-project-2dc06.firebaseapp.com",
  
    projectId: "my-digital-project-2dc06",
  
    storageBucket: "my-digital-project-2dc06.appspot.com",
  
    messagingSenderId: "993705119445",
  
    appId: "1:993705119445:web:a99b6d6ec31da62e021c5c",
  
    measurementId: "G-BYXYFSEM42"
  
};
  
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)  