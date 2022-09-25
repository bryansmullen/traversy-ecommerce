const bcrypt = require('bcryptjs')


const users = [
    {
        name: 'Admin User',
        email: 'admin@mail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@mail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: 'Jane Doe',
        email: 'jane@mail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    }
]

module.exports = users