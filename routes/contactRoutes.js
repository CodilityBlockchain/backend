const express = require("express");
const router = express.Router();
const {getContact,createContact,updateContact,deleteContact,getSingleContacts} = require("../controllers/contactController");
router.route("/").get(getContact);
router.route("/").post(createContact);
router.route("/:id").put(updateContact).delete(deleteContact).get(getSingleContacts);
// router.route("/:id").delete(deleteContact);
// router.route("/:id").get(getSingleContacts);
 
module.exports = router;