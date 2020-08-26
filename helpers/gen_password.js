const bcrypt = require('bcrypt');

let pswrd = bcrypt.hashSync('german', 9);

console.log(pswrd);