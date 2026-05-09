const express = require("express");

const router = express.Router();

const {
  scanEmail
} = require("../controllers/exposureController");

// POST route
router.post("/scan", scanEmail);

module.exports = router;