const userModel = require('../models/userModel')

// Login callback
const loginController = async (req, res) => {
    try {
        // Restructuring values 
        const { email, password } = req.body;
        const user = await userModel.findOne({ email, password });

        if (!user) {
            // 404 - not found
            return res.status(404).send("User not found");
        }
        // 200 - ok
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        // 400 - bad request
        res.status(400).json({
            success: false,
            error,
        });
    }
};

// Register callback
const registerController = async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        await newUser.save();
        // 201 - created
        res.status(201).json({
            success: true,
            newUser,  // Corrected from newuser to newUser
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error,
        });
    }
}

module.exports = { loginController, registerController };
