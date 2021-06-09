const express = require("express");
const router = express.Router();
const { database } = require("../data/index");
const Gig = require("../data/models/Gig");

//for views
router.get("/", (req, res) =>
  Gig.findAll()
    .then((gigs) => {
      console.log("GIGS", gigs);
      res.render("gigs", {
        gigs,
      });
    })
    .catch((err) => {
      console.log(err);
    })
);

router.get("/add", (req, res) => {
  res.render("add");
});

router.get("/getUserById", async (req, res) => {
  const queryId = req.query.id;
  await Gig.findAll({
    where: {
      id: queryId,
    },
  })
    .then((gig) => {
      res.send(gig).sendStatus(200);
    })
    .catch((err) => {
      res.send(err).sendStatus(500);
    });
});

router.post("/create", (req, res) => {
  console.log(req.body);
  Gig.create({
    title: req.body.title,
    technologies: req.body.technologies,
    description: req.body.description,
    budget: req.body.budget,
    contact_email: req.body.contact_email,
  })
    .then((gig) => {
      res.redirect("/gigs");
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});
module.exports = router;
