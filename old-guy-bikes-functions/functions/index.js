const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

//Get all bikes from bikes collection
exports.getAllBikes = functions.https.onRequest((req, res) => {
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
exports.createBike = functions.https.onRequest((req, res) => {
  if (req.method !== "POST") {
    return res.status(400).json({ error: "Method not allowed" });
  }

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
      console.log("Added document with ID: ", docRef.id);
    })
    .catch(err => {
      res.status(500).json({ error: "Something went wrong." });
      console.log(err);
    });
});

//Delete a bike
exports.deleteBike = functions.https.onRequest((req, res) => {
  const document = admin.firestore().doc(`/bikes/${req.params.bikeId}`);
  admin
    .firestore()
    .collection("bikes")
    .doc()
    .delete();
});
