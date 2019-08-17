const functions = require("firebase-functions");

//Initialize admin SDK to interact with different services
//like authentication service and firestore service
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

//Create Bike

//Delete Bike

//Edit Bike

//Get all bikes from bikes collection
// app.get("/bikes", (req, res) => {
//   admin
//     .firestore()
//     .collection("bikes")
//     .orderBy("createdAt", "desc")
//     .get()
//     .then(data => {
//       let bikes = [];
//       data.forEach(doc => {
//         bikes.push({
//           bikeId: doc.id,
//           bikeName: doc.data().bikeName,
//           description: doc.data().description,
//           photoURL: doc.data().photoURL,
//           price: doc.data().price,
//           createdAt: doc.data().createdAt
//         });
//       });
//       return res.json(bikes);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// });

// //Add a new bike
// app.post("/bike", (req, res) => {
//   const newBike = {
//     bikeName: req.body.bikeName,
//     description: req.body.description,
//     photoURL: req.body.photoURL,
//     price: req.body.price,
//     createdAt: new Date().toISOString()
//   };

//   admin
//     .firestore()
//     .collection("bikes")
//     .add(newBike)
//     .then(docRef => {
//       res.json({ mesage: `document ${docRef.id} created successfully.` });
//     })
//     .catch(err => {
//       res.status(500).json({ error: "Something went wrong." });
//       console.log(err);
//     });
// });

// //Delete a bike
// // exports.deleteBike = functions.https.onRequest((req, res) => {
// //   const document = admin.firestore().doc(`/bikes/${req.params.bikeId}`);
// //   document.get().then(doc => {
// //     if (!doc.exists) {
// //       return res.status(404).json({ error: "Bike not found" });
// //     }
// //     if (doc.data().userHandle !== req.user.handle) {
// //       return res.status(403).json({ error: "Unauthorized" });
// //     } else {
// //       return document.delete();
// //     }
// //   });
// // });

// app.post("/login", (req, res) => {
//   const user = {
//     email: req.body.email,
//     password: req.body.password
//   };

//   let errors = {};

//   if (isEmpty(user.email)) {
//     errors.email = "Must not be empty";
//   }

//   if (isEmpty(user.password)) {
//     errors.email = "Must not be empty";
//   }

//   if (Object.keys(errors).length > 0) {
//     return res.status(400).json(errors);
//   }

//   firebase
//     .auth()
//     .signInWithEmailAndPassword(user.email, user.password)
//     .then(data => {
//       return data.user.getIdToken();
//     })
//     .then(token => {
//       return res.json({ token });
//     })
//     .catch(err => {
//       console.log(err);
//       return res.status(500).json({ err: err.code });
//     });
// });

// exports.api = functions.https.onRequest(app);
