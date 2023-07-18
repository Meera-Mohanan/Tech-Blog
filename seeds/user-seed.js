const { user } = require('../models');

const userData = [
    {
        username: "Anila",
        email: "Anilat@gmail.com",
        password: "password1234"
    },
    {
        username: "Anu",
        email: "Anumj@gmail.com",
        password: "password1234"
    },
    {
        username: "Nitin",
        email: "ShirleyBennett@gmail.com",
        password: "password1234"
    },
    {
        username: "Britta",
        email: "BrittaPerry@gmail.com",
        password: "password1234"
    },
    {
        username: "Troy",
        email: "TroyBarnes@gmail.com",
        password: "password1234"
    },
    {
        username: "Abed",
        email: "AbedNadir@gmail.com",
        password: "password1234"
    },
]

const seedUsers = () => user.bulkCreate(userData);
//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;