const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries");
//const mysql = require("mysql");
//const multer = require('multer');

// variables
//let state_connection = "Conexión Exitosa";

// incializamos el servidor
const app = express();
const port = 3000;
//const upload = multer(); // Configurar multer

app.use(express.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.get('/', (req, res) => {
    res.json({
        Bienvenido: "API creada con NODEJS, Express y MYSQL"
    });
});

app.get('/dispositivos', db.getDispositivos);
app.get('/dispositivos/:id', db.getDispositivoByID);
app.get('/estados', db.getEstado);
app.put('/dispositivo', db.changeEstado);
app.post('/dispositivo', db.addDispositivo);

// configuramos la conexión
//const connection = mysql.createConnection({
//    host: 'localhost',
//    user: 'sa',
//   password: '12345678',
//    database: 'my_smarthome'
//});

// realizamos la conexion a MYSQL
//connection.connect((exception) => {
//    if (exception) state_connection = "Error al Conectar con MySQL: " + exception.stack;
//    console.log(state_connection);
//});

/* 

        Consultas para comunicarnos con la APP Móvil



// Extrae todos los dispositivos, de Activados (1) a Desactivados (0)
app.get('/api/registros', (req, res) => {
    connection.query("SELECT * FROM dispositivos;", (error, results) => {
        if (error) {
            console.error('Error al realizar consulta: ' + error);
            res.status(500).json({ error: 'Error al obtener registros' });
        } else {
            res.status(200).json(results);
        }
    });
});

// Actualiza el nombre de un Dispositivo
app.put('/api/registros/:cv_disp', upload.none(), async(req, res) => {
    try {
        await connection.connect(connection);
        const dispositivo = req.params.cv_disp; // ID del Dispositivo a cambiar
        const nombre = req.body.nombre;
        let query = "UPDATE Dispositivos SET nombre = '${nombre}' WHERE cv_dispositivo = ${dispositivo};";
        await connection.query(query);
        console.log('Registro actualizado con éxito')
        res.sendStatus(200)
    } catch (exception) {
        console.log('Error al actualizar el registro:', exception)
        res.sendStatus(500)
    } finally {
        connection.close();
    }
});

// Actualiza el estado de un Dispositivo
app.put('/my_home/dispositivo:cv_disp', upload.none(), async(req, res) => {
    try {
        await connection.connect(connection);
        const dispositivo = req.params.cv_disp; // ID del Dispositivo a cambiar
        const { estado } = req.body;
        let query = "UPDATE Dispositivos SET estado = '${estado}' WHERE cv_dispositivo = ${dispositivo};";
        await connection.query(query);
        console.log('Registro actualizado con éxito')
        res.sendStatus(200)
    } catch (exception) {
        console.log('Error al actualizar el registro:', exception)
        res.sendStatus(500)
    } finally {
        connection.close();
    }
});

// Actualiza la Ubicación del Dispositivo
app.put('/my_home/dispositivo:cv_disp', upload.none(), async(req, res) => {
    try {
        await connection.connect(connection);
        const dispositivo = req.params.cv_disp; // ID del Dispositivo a cambiar
        const { ubicacion } = req.body;
        let query = "UPDATE Dispositivos SET ubicacion = '${ubicacion}' WHERE cv_dispositivo = ${dispositivo};";
        await connection.query(query);
        console.log('Registro actualizado con éxito')
        res.sendStatus(200)
    } catch (exception) {
        console.log('Error al actualizar el registro:', exception)
        res.sendStatus(500)
    } finally {
        connection.close();
    }
});

// Agrega un nuevo Dispositivo
app.post('/my_home/dispositivo', upload.none(), async(req, res) => {
    try {
        const nombre = req.body.nombre;
        const ubicacion = req.body.ubicacion;
        // Realizar la conexión a la base de datos
        await connection.connect(config);

        // Crear la consulta parametrizada
        const query =
            'INSERT INTO Dispositivos (nombre, estado, ubicacion) VALUES (@nombre, 0, @ubicacion)';

        // Ejecutar la consulta parametrizada
        const request = new connection.Request();
        request.input('nombre', sql.VarChar, nombre);
        request.input('ubicacion', sql.VarChar, ubicacion);

        await request.query(query);

        console.log('Registro creado con éxito')
        res.sendStatus(201)
    } catch (exception) {
        console.log('Error al crear el registro:', exception)
        res.sendStatus(500)
    } finally {
        connection.close()
    }
});

// Elimina un Dispositivo
//app.delete();

*/

// ponemos el Server en escucha en port 3000
app.listen(port, () => {
    console.log("API ejecutandose en el puerto: %d", port);
});