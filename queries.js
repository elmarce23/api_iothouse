//const { request, response } = require("express");
const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "",
    database: "my_smarthome",
    debug: false
});

const getDispositivos = (request, response) => {
    let query_g = "SELECT * FROM dispositivos;";
    pool.query(query_g, (error, data) => {
        if (error) throw error;
        response.status(200).json(data);
        console.log(data);
    });
}

const getDispositivoByID = (request, response) => {
    let id = parseInt(request.params.id);
    let query_g = "SELECT * FROM dispositivos WHERE cv_dispositivo = " + id;
    pool.query(query_g, (error, result) => {
        if (error) throw error;
        response.status(200).json(result);
    });
}

const changeEstado = (request, response) => {
    let id = parseInt(request.params.id);
    let edo = parseInt(request.params.estado);
    let query_c = "UPDATE dispositivos SET estado = " + edo + " WHERE cv_dispositivo = " + id;
    pool.query(query_g, (error, result) => {
        if (error) throw error;
        response.status(200);
    });
}

module.exports = {
    getDispositivos,
    getDispositivoByID,
    changeEstado
}