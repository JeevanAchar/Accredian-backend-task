const router = require("express").Router();
const { createReferral } = require("../controllers/referralController.js");

router.post("/referral", createReferral);

module.exports = router;
