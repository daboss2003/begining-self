const User = require('../model/User');
const bcrypt = require('bcrypt');


const handleNewUser = async (req, res) => {
    const { user, password } = req.body;
    if (!user || !password) return res.status(400).json({ 'message': 'username and password are required' });
    const duplicate = await User.findOne({ username: user }).exec();
    if (duplicate) return res.status(409).json({'message': 'user already exists'});
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await User.create({
            "username": user,
            'password': hashedPassword
        });
        console.log(result);
        
        res.status(201).json({'message': `New user ${user} successfully created`})
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }


}

module.exports = { handleNewUser }