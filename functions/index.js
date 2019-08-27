const functions = require("firebase-functions");

//Initialize admin SDK to interact with different services
//like authentication service and firestore service
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
