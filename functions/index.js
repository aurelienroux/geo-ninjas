const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

// eslint-disable-next-line
exports.checkAlias = functions.https.onCall((data, context) => {
  const ref = admin
    .firestore()
    .collection('users')
    .doc(data.slug)

  return (
    ref
      .get()
      .then(doc => {
        return { unique: !doc.exists }
      })
      // eslint-disable-next-line
      .catch(err => {
        throw new functions.https.HttpsError('failed to connect')
      })
  )
})
