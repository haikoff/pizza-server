module.exports = app => {
  const desert = require("../controllers/desert.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", desert.create);

  // Retrieve all Tutorials
  router.get("/", desert.findAll);

  // Retrieve all published Tutorials
  router.get("/published", desert.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", desert.findOne);

  // Update a Tutorial with id
  router.put("/:id", desert.update);

  // Delete a Tutorial with id
  router.delete("/:id", desert.delete);

  // Create a new Tutorial
  router.delete("/", desert.deleteAll);

  app.use("/api/desert", router);
};
