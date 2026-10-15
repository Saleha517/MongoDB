const express = require("express");
const { createUser, getUsers, deleteUser, updateUser } = require("../Controller/userController");
const router = express.Router();
router.get("/getUsers" , getUsers);
router.post("/create" , createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
module.exports = router;