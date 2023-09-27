const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");

router.get("/user", userControllers.getProfile);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.post("/users", userControllers.add);
router.get("/user/:userId", userControllers.getUserById);

module.exports = router;