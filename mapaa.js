import fs from "fs/promises";

async function ejecutar() {

    try {

        const contenidoStr = await fs.readFile(
            "./package.json",
            "utf-8"
        );

        const contenidoObj = JSON.parse(contenidoStr);

        const stats = await fs.stat("./package.json");

        const info = {
            contenidoStr,
            contenidoObj,
            size: stats.size
        };

        console.log("Información del package.json:");
        console.log(info);

        const infoStr = JSON.stringify(info, null, "\t");

        await fs.writeFile("./info.txt", infoStr);

        console.log("info.txt creado correctamente");

    } catch (error) {

        console.error("Ocurrió un error:");
        console.error(error.message);

    }
}

ejecutar();