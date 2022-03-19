module.exports = app => {
  const sous = require("../controllers/sous.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", sous.create);

  // Retrieve all Tutorials
  router.get("/", sous.findAll);

  // Retrieve all published Tutorials
  router.get("/published", sous.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", sous.findOne);

  // Update a Tutorial with id
  router.put("/:id", sous.update);

  // Delete a Tutorial with id
  router.delete("/:id", sous.delete);

  // Create a new Tutorial
  router.delete("/", sous.deleteAll);

  app.use("/api/sous", router);
};
