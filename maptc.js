import fs from "fs/promises";

let contenidoStr;
let contenidoObj;

fs.readFile("./package.json", "utf-8")

    .then((contenido) => {

        contenidoStr = contenido;
        contenidoObj = JSON.parse(contenidoStr);

        return fs.stat("./package.json");
    })

    .then((stats) => {

        const info = {
            contenidoStr,
            contenidoObj,
            size: stats.size
        };

        console.log("Información del package.json:");
        console.log(info);

        const infoStr = JSON.stringify(info, null, "\t");

        return fs.writeFile("./info.txt", infoStr);
    })

    .then(() => {

        console.log("info.txt creado correctamente");

    })

    .catch((error) => {

        console.error("Ocurrió un error:");
        console.error(error.message);

    });