module.exports = app => {
  const pizza = require("../controllers/pizza.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", pizza.create);

  // Retrieve all Tutorials
  router.get("/", pizza.findAll);

  // Retrieve all published Tutorials
  router.get("/published", pizza.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", pizza.findOne);

  // Update a Tutorial with id
  router.put("/:id", pizza.update);

  // Delete a Tutorial with id
  router.delete("/:id", pizza.delete);

  // Create a new Tutorial
  router.delete("/", pizza.deleteAll);

  app.use("/api/pizza", router);
};
