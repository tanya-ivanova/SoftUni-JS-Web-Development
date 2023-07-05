import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: 'AIzaSyCHd8tixLzdIksQWH4rdcGEyspdgU7xR98',
  authDomain: 'test-images-8aaac.firebaseapp.com',
  projectId: 'test-images-8aaac',
  storageBucket: 'test-images-8aaac.appspot.com',
  messagingSenderId: '87843342380',
  appId: '1:87843342380:web:8674fcf834a15d18cde989'
}

const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
