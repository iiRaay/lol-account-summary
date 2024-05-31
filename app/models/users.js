const bcrypt = require('bcrypt');
const db = require('../config/connection');

// search users by username
const findByUsername = (username) => {
    return db.one(`
        SELECT * 
        FROM users
        WHERE username = $1
    `, username);
}

// save user info after they register
const create = (user) => {
    // hash user clear text password (or encrypt, can use SHA256 or AES)
    const encryptedPassword = bcrypt.hashSync(user.password, 11);
    return db.one(`
        INSERT INTO users (username, password_digest)
        VALUES ($1, $2)
        RETURNING *
    `, [user.username, encryptedPassword]);
};


//verify user info
const login = (user) => {
    // search for inputted username
    return this.findByUsername(user.username)
    .then((userInfo) => {
        // verify passwords match
        const validAttempt = bcrypt.compareSync(user.password, userInfo.password_digest);
        
        //reject promise if not valid
        if(!validAttempt) {
            throw new Error('stop tryna break in brother')
        }

        return userInfo;
    });
};

const findById = (id) => {
    return db.one(`
        SELECT * 
        FROM users
        WHERE id = $1
    `, id);
};




module.exports = {findById, findByUsername, login, create};