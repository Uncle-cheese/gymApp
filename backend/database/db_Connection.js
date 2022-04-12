const Pool = require('pg').Pool
const pool = new Pool({
    user:'nhlanhla',
    host:'localhost',
    database:'gymdb',
    password:'19970503Mn',
    port:'5432'
})

module.exports = pool;