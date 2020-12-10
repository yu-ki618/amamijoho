import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import{ firebaseConfig } from './firebaseConfig'

export const firebaseApp = firebase.initializeApp(firebaseConfig)