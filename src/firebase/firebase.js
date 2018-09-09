import * as firebase from 'firebase'

// const config = {
// 	apiKey: process.env.FIREBASE_API_KEY,
// 	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
// 	databaseURL: process.env.FIREBASE_DATABASE_URL,
// 	projectId: process.env.FIREBASE_PROJECT_ID,
// 	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
// }



  var config = {
    apiKey: "AIzaSyBelRYfu99AfsrY",
    authDomain: "finance8-199ac.firebaseapp.com",
    databaseURL: "https://finance8-199ac.firebaseio.com",
    projectId: "finance8-199ac",
    storageBucket: "finance8-199ac.appspot.com",
    messagingSenderId: "462994273145"
  };
 
firebase.initializeApp(config)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider,  database as default }

firebase.auth().signInAnonymously().catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
database.ref('expenses').on('child_removed', (snapshot) => {
	console.log(snapshot.key, snapshot.val())
})

database.ref('expenses').on('child_changed', (snapshot) => {
	console.log(snapshot.key, snapshot.val())
})


database.ref('expenses')
	.once('value')
	.then((snapshot) => {
		const expenses = []

		snapshot.forEach((childSnapshot) => {
			expenses.push({
				id: childSnapshot.key,
				...childSnapshot.val()
			})
		})

		console.log(expenses)
	}).catch((e) => {
		console.log("error", e)
	})

database.ref('expenses').on('value', (snapshot) => {
	const expenses = []

	snapshot.forEach((childSnapshot) => {
		expenses.push({
			id: childSnapshot.key,
			...childSnapshot.val()
		})
	})

	console.log(expenses)
})

database.ref('expenses').push({
	amount: 1000,
	createdAt: 3243253252,
	description: 'rent'
})

database.ref('expenses').push({
	amount: 1500,
	createdAt: 3243253252,
	description: 'food'
})

database.ref('expenses').push({
	amount: 2000,
	createdAt: 3243253252,
	description: 'bus'
})

database.ref()
	.set({
		name: 'Jason',
		age: 26,
		isSingle: false,
		location: {
			city: 'Oak',
			country: 'USA'
		}
	})
	.then(() => {
		console.log('Data is saved')
	})
	.catch((e) => {
		console.log("Failed", e)
	})


database.ref('isSingle')
	.remove()
	.then(() => {
		console.log('Data is removed')
	})
	.catch((e) => {
		console.log("Failed", e)
	})

database.ref()
	.update({
		age: 10,
		'location/country': 'China'
	})
	.then(() => {
		console.log('Data is updated')
	})
	.catch((e) => {
		console.log("Failed", e)
	})


database.ref()
	.once('value')
	.then((snapshot) => {
		const val = snapshot.val()
		console.log(val)
	})
	.catch((e) => {
		console.log("Failed", e)
	})
