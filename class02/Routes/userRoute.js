const express = require("express");
const { createUser, getUsers } = require("../Controller/userController");
const router = express.Router();
router.get("/getUsers" , getUsers);
router.post("/create" , createUser);
module.exports = router;