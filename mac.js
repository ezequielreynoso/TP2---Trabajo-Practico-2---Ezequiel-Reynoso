import fs from "fs";

fs.readFile("./package.json", "utf-8", (error, contenidoStr) => {

    if (error) {
        console.error("Error al leer el archivo:", error.message);
        return;
    }

    let contenidoObj;

    try {
        contenidoObj = JSON.parse(contenidoStr);
    } catch (error) {
        console.error("Error al convertir el JSON:", error.message);
        return;
    }

    fs.stat("./package.json", (error, stats) => {

        if (error) {
            console.error("Error al obtener el tamaño:", error.message);
            return;
        }

        const info = {
            contenidoStr,
            contenidoObj,
            size: stats.size
        };

        console.log("Información del package.json:");
        console.log(info);

        const infoStr = JSON.stringify(info, null, "\t");

        fs.writeFile("./info.txt", infoStr, (error) => {

            if (error) {
                console.error("Error al escribir el archivo:", error.message);
                return;
            }

            console.log("info.txt creado correctamente");
        });
    });
});