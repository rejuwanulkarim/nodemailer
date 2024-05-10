const mysql = require("mysql")


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
})


// connection.connect((err) => {
//     if (err) throw err;
//     console.log("Connection success");
// })
connection.connect((err) => {
    // if (err) throw err;
    console.log(err);

})