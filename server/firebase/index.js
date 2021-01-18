
var admin = require("firebase-admin");

var serviceAccount = require("../config/fbServiceAccountKey.json");

admin.initializeApp({
<<<<<<< HEAD
  credential: admin.credential.cert(serviceAccount),
  databaseURl: "https://ecommerce-3c709.firebaseio.com",
});


module.exports = admin;
=======
  credential: admin.credential.cert(serviceAccount)
//   databaseURL: "https://ecommerce-3c709.firebaseio.com"
});

module.export = admin;
>>>>>>> a5370446205909b9249f38f8969329c0d83c2a8f
