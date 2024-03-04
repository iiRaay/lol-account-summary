DROP DATABASE IF EXISTS accounts_dev;
CREATE DATABASE accounts_dev;

DROP TABLE IF EXISTS account_uids;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    username VARCHAR (255) UNIQUE NOT NULL,
    password_digest VARCHAR (255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE account_uids (
    id SERIAL PRIMARY KEY, 
    unique_id VARCHAR (255) UNIQUE NOT NULL,
    -- userId INTERGER REFERENCES users,
    user_id INTEGER REFERENCES users(id), 
);