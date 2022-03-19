module.exports = app => {
  const drink = require("../controllers/drink.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", drink.create);

  // Retrieve all Tutorials
  router.get("/", drink.findAll);

  // Retrieve all published Tutorials
  router.get("/published", drink.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", drink.findOne);

  // Update a Tutorial with id
  router.put("/:id", drink.update);

  // Delete a Tutorial with id
  router.delete("/:id", drink.delete);

  // Create a new Tutorial
  router.delete("/", drink.deleteAll);

  app.use("/api/drink", router);
};
