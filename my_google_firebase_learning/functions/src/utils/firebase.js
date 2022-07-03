const admin = require("firebase-admin");
const serviceAccount = require("../../config/keys/service_accounts/firebase-node-express.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
module.exports = {
    admin: admin
};
