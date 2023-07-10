const express = require('express');
const appBook = express.Router();

const mysql = require('mysql');
var connection = mysql.createConnection({
    host:       'localhost',
    user:       'root',
    password:   'manager',
    database:   'sdm'
})

//SELECT - GET
appBook.get("/", (request, response)=>{
    var query = `select * from book_tb where author='${request.body.author}'`;
    connection.query(query, (error, result)=>{
        if(error==null){
            var data = JSON.stringify(result);
            response.setHeader("Content-Type", "application/json");
            console.log(data);
            response.send(data);
        }
        else{
            console.log(error);
            response.setHeader("Content-Type", "application/json");
            response.send(error);
        }
    })
})

//INSERT - POST
appBook.post("/", (request, response)=>{
    var query = `insert into book_tb(b_name, author, book_type, price, published_date, language) values('${request.body.b_name}', '${request.body.author}', '${request.body.book_type}', ${request.body.price}, '${request.body.published_date}', '${request.body.language}');
    `;
    connection.query(query, (error, result)=>{
        if(error==null){
            var data = JSON.stringify(result);
            response.setHeader("Content-Type", "application/json");
            console.log(data);
            response.send(data);
        }
        else{
            console.log(error);
            response.setHeader("Content-Type", "application/json");
            response.send(error);
        }
    })
})

//UPDATE - PUT
appBook.put("/:id", (request, response) => {
    var query = `update book_tb set price = ${request.body.price}, language='${request.body.language}' where id = ${request.params.id};
    `;
    connection.query(query, (error, result)=>{
        if(error==null){
            var data = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.send(data);
        }
        else{
            console.log(error);
            response.setHeader("Content-Type", "application/json");
            response.send(error);
        }
    })
}
)



module.exports = appBook;