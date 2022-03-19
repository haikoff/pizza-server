module.exports = app => {
  const zakuski = require("../controllers/zakuski.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", zakuski.create);

  // Retrieve all Tutorials
  router.get("/", zakuski.findAll);

  // Retrieve all published Tutorials
  router.get("/published", zakuski.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", zakuski.findOne);

  // Update a Tutorial with id
  router.put("/:id", zakuski.update);

  // Delete a Tutorial with id
  router.delete("/:id", zakuski.delete);

  // Create a new Tutorial
  router.delete("/", zakuski.deleteAll);

  app.use("/api/zakuski", router);
};
