import chalk from "chalk";
import fetchWeather from "./helpers/fetchWeather.js";

function getData(){

    let city = process.argv[2];

    if(!city) {
        console.log(chalk.red.bold("Ingresa el nombre de un lugar o ciudad!"));
    }else{
        fetchWeather(city)
        .then(response => {
            if (response.error) {
                console.log(chalk.red.bold(response.error));
            } else {
                console.log(chalk.bgWhite.black.bold(`La temperatura en ${chalk.blue(city)} es: ${chalk.green(response)}°C`));
            }
        })
        .catch(error => {
            console.log(chalk.red.bold("Error al obtener los datos del clima:", error));
        });
    }

}

const main = () => {
    getData();
}

main();