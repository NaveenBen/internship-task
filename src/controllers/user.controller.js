const {userSchema} = require('../validationschema/user.schema');
const {CreateUser} = require('../services/user.service');

const userController = {
    createUser: async (req, res) => {
        try{
            let userData = req.body;
            const {error} = userSchema.validate(userData);
            if(error){
                return res.status(400).json({
                    message: error.details[0].message
                });
            }
            const user = await CreateUser(userData);
            return res.status(201).json({
                message: 'User created successfully',
                user: user
            });
        }
        catch(err){
            res.status(500).send({
                message: err.message
            });
        }
    },
    getUser: async (req, res) => {
        try{
            res.status(200).json({
                status: 'success',
                cont:"userController.getUser"
            });
        }
        catch(err){
            res.status(500).send({
                message: err.message
            });
        }
    },
    getAllUsers: async (req, res) => {
        try{
            res.status(200).json({
                status: 'success',
                cont:"userController.getAllUsers"
            });
        }
        catch(err){
            res.status(500).send({
                message: err.message
            });
        }
    },
    updateUser: async (req, res) => {
        try{
            res.status(200).json({
                status: 'success',
                cont:"userController.updateUser"
            });
        }
        catch(err){
            res.status(500).send({
                message: err.message
            });
        }
    },
    deleteUser: async (req, res) => {
        try{
            res.status(200).json({
                status: 'success',
                cont:"userController.deleteUser"
            });
        }
        catch(err){
            res.status(500).send({
                message: err.message
            });
        }
    },

}

module.exports = userController;