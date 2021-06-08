const express = require("express");
const router = express.Router();
const { database } = require("../data/index");
const Gig = require("../data/models/Gig");

router.get("/", (req, res) => {
  Gig.findAll()
    .then((gigs) => {
      res.send({ gigs }).sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/create", (req, res) => {
  Gig.create({
    title: "title",
    technologies: "C#",
    description: "sample desc",
    budget: "P100",
    contact_email: "hello@example.com",
  })
    .then((gig) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});
module.exports = router;
