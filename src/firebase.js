import { initializeApp } from "firebase/app";

import { 
  getFirestore,
  collection,
  getDoc,
  doc,
  addDoc,
  setDoc,
  deleteDoc,
  updateDoc,
  onSnapshot,
} from 'firebase/firestore';

import env from './env.js'

const firebaseConfig = {
  apiKey: env.apiKey,
  authDomain: env.authDomain,
  projectId: env.projectId,
  storageBucket: env.storageBucket,
  messagingSenderId: env.messagingSenderId,
  appId: env.appId,
  measurementId: env.measurementId
};

const collectionName = 'tasks';

// Initialize Firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const collectionRef = collection(db, collectionName);

// get realtime data
export const onTasksUpdated = (callback) => {
  onSnapshot(collectionRef, callback)
}

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
export const setTask = async(taskData, id) => {
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

// update task
export const updateTask = async(taskData, id) => {
  const taskRef = doc(db, collectionName, id);
  await updateDoc(taskRef, taskData);
}