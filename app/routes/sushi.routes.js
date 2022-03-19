module.exports = app => {
  const sushi = require("../controllers/sushi.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", sushi.create);

  // Retrieve all Tutorials
  router.get("/", sushi.findAll);

  // Retrieve all published Tutorials
  router.get("/published", sushi.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", sushi.findOne);

  // Update a Tutorial with id
  router.put("/:id", sushi.update);

  // Delete a Tutorial with id
  router.delete("/:id", sushi.delete);

  // Create a new Tutorial
  router.delete("/", sushi.deleteAll);

  app.use("/api/sushi", router);
};
