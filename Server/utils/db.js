import mysql from 'mysql'

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employeeks"
})

con.connect(function(err) {
    if(err) {
        console.log("connection err")
    } else {
        console.log("Connected")
    }
})

export default con;