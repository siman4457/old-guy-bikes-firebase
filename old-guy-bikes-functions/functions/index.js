const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const express = require("express");
const app = express();

//Get all bikes from bikes collection
app.get("/bikes", (req, res) => {
  admin
    .firestore()
    .collection("bikes")
    .orderBy("createdAt", "desc")
    .get()
    .then(data => {
      let bikes = [];
      data.forEach(doc => {
        bikes.push({
          bikeId: doc.id,
          bikeName: doc.data().bikeName,
          description: doc.data().description,
          photoURL: doc.data().photoURL,
          price: doc.data().price,
          createdAt: doc.data().createdAt
        });
      });
      return res.json(bikes);
    })
    .catch(err => {
      console.error(err);
    });
});

//Add a new bike
app.post("/bike", (req, res) => {
  const newBike = {
    bikeName: req.body.bikeName,
    description: req.body.description,
    photoURL: req.body.photoURL,
    price: req.body.price,
    createdAt: new Date().toISOString()
  };

  admin
    .firestore()
    .collection("bikes")
    .add(newBike)
    .then(docRef => {
      res.json({ mesage: `document ${docRef.id} created successfully.` });
    })
    .catch(err => {
      res.status(500).json({ error: "Something went wrong." });
      console.log(err);
    });
});

//Delete a bike
// exports.deleteBike = functions.https.onRequest((req, res) => {
//   const document = admin.firestore().doc(`/bikes/${req.params.bikeId}`);
//   document.get().then(doc => {
//     if (!doc.exists) {
//       return res.status(404).json({ error: "Bike not found" });
//     }
//     if (doc.data().userHandle !== req.user.handle) {
//       return res.status(403).json({ error: "Unauthorized" });
//     } else {
//       return document.delete();
//     }
//   });
// });

exports.api = functions.https.onRequest(app);
