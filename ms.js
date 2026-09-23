import fs from "fs";

try {

    const contenidoStr = fs.readFileSync("./package.json", "utf-8");

    const contenidoObj = JSON.parse(contenidoStr);

    const stats = fs.statSync("./package.json");

    const info = {
        contenidoStr: contenidoStr,
        contenidoObj: contenidoObj,
        size: stats.size
    };

    console.log("Información del package.json:");
    console.log(info);

    const infoStr = JSON.stringify(info, null, "\t");

    fs.writeFileSync("./info.txt", infoStr, "utf-8");

    console.log("Archivo info.txt creado correctamente.");

} catch (error) {

    console.error("Ocurrió un error:");
    console.error(error.message);

}