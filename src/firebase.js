import { initializeApp } from "firebase/app";

import { 
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBMIO6PWrUjJn1qKqY8fBLCyLMdLeZDWLM",
  authDomain: "vue-to-do-daebb.firebaseapp.com",
  projectId: "vue-to-do-daebb",
  storageBucket: "vue-to-do-daebb.appspot.com",
  messagingSenderId: "1013920832950",
  appId: "1:1013920832950:web:3ac18539a04b6cc6fc3517",
  measurementId: "G-K8XYYZ0LRQ"
};

const collectionName = 'tasks';

// Initialize Firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const collectionRef = collection(db, collectionName);

// get collection data
export const getTasks = 
getDocs(collectionRef)
  .then((snapshot) => {
    let tasks = [];
    snapshot.docs.forEach((doc) => {
      tasks.push({...doc.data(), id: doc.id})
    })

    return tasks
  })
  .catch(err => {
    console.log(err.message)
  })

// get task data
export const getTask = async(id) => {
  const userDocument = doc(db, collectionName, id);
  const userDocumentSnapshot = await getDoc(userDocument);

  return userDocumentSnapshot.data();
};

// add task
export const addTask = async(taskData) => {
  await addDoc(collection(db, collectionName),
    taskData
  )
};

// update task
export const updateTask = async(taskData, id) => {
  const taskRef = doc(db, collectionName, id);
  await setDoc(taskRef,
    taskData
  );
};

// delete task
export const deleteTask = async(id) => {
  const taskRef = doc(db, collectionName, id);
  await deleteDoc(taskRef);
}