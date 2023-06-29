//const { request, response } = require("express");
const { request, response } = require("express");
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
};

const getDispositivoByID = (request, response) => {
    let id = parseInt(request.params.id);
    let query_g = "SELECT * FROM dispositivos WHERE cv_dispositivo = " + id;
    pool.query(query_g, (error, result) => {
        if (error) throw error;
        response.status(200).json(result);
    });
};

const getEstado = (request, response) => {
    let queryb = "SELECT cv_dispositivo, estado FROM dispositivos;";
    pool.query(queryb, (error, result) => {
        if (error) throw error;
        response.status(200).json(result);
    });
};

const changeEstado = (request, response) => {
    //let id = parseInt(request.params.id);
    let { id, estado } = request.body;
    //let estado = request.body.estado;
    console.log(request.body);
    let query_c = "UPDATE dispositivos SET estado = " + estado + " WHERE cv_dispositivo = " + id;
    pool.query(query_c, (error) => {
        if (error) throw error;
        response.status(200).send("Registro Actualizado");
    });
};

const addDispositivo = (request, response) => {
    let { nombre, estado, ubicacion } = request.body;
    console.log(request.body);
    let query_a = "INSERT INTO `dispositivos` (`cv_dispositivo`, `nombre`, `estado`, `ubicacion`, `activo`)" +
        " VALUES (NULL, '" + nombre + "', " + estado + ", '" + ubicacion + "', 0)";
    pool.query(query_a, (error) => {
        if (error) throw error;
        response.status(200).send("Registro Agregado");
    });
};

module.exports = {
    getDispositivos,
    getDispositivoByID,
    changeEstado,
    addDispositivo,
    getEstado
}