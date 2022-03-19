module.exports = app => {
  const kombo = require("../controllers/kombo.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", kombo.create);

  // Retrieve all Tutorials
  router.get("/", kombo.findAll);

  // Retrieve all published Tutorials
  router.get("/published", kombo.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", kombo.findOne);

  // Update a Tutorial with id
  router.put("/:id", kombo.update);

  // Delete a Tutorial with id
  router.delete("/:id", kombo.delete);

  // Create a new Tutorial
  router.delete("/", kombo.deleteAll);

  app.use("/api/kombo", router);
};
