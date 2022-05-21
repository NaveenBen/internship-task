const {User} = require('../models');

const CreateUser = async (userData) => {

    try{
        const user = await User.create(userData);
        return user;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    CreateUser
}