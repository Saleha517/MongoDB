const User = require("../model/userModel");
const createUser = async (req,res) => {
    try{
        const {name, email, age} = req.body;
        const user = await User.create({
         name,
         email,
         age,
        });
        res.status(201).json({
            success: true,
            message: "User Created",
            date: user,
        });
    } catch (error){
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json({
        success: true,
        message: "User Fetched",
        count: users.length,
        data: users,
        });
    } catch(error){
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createUser,
    getUsers
};