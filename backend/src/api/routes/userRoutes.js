const express = require("express");
const {
    createUserHandler,
    getAllUserHandler,
    getUserHandler,
    updateUserHandler,
    searchUserHandler,
    deleteUserHandler
} = require("../controllers/userController");
const router = express.Router();

router.post("/", createUserHandler); // Create user
router.get("/", getAllUserHandler); // Get all user
router.get('/search', searchUserHandler); // Use the search controller
router.get("/:id", getUserHandler); // Get user by ID
router.put("/:id", updateUserHandler); // Update user
router.delete("/:id", deleteUserHandler); // Delete user

module.exports = router;
