const express = require("express");
const db = require("./connection");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const truckLocations = await db('notes');

    if (truckLocations.length === 0) {
      return res.status(200).json({ message: "No trucks found" });
    }
    res.status(200).json(truckLocations);
  } 
  catch (error) {
    res.status(500).json({ message: "No trucks could be retrieved.", error });
  }
})

module.exports = router;