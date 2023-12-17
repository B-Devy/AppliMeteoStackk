/*
const request = require('postman-request');

request("https://dog.ceo/api/breeds/image/random", (error, response, body) => {
    console.log(error)
    //console.log(response)
    const dogPicture = JSON.parse(body);
    console.log(dogPicture)

})

const chien = fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => console.log(data))

  

const weather = (location, unit, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=c005f06fa8d4b12ecc4ebe041868ffaa&query=${location}&units=${unit}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
           /* if (data.success === false) {
                callback(`Impossible de renvoyer les informations ${data.error.code}: ${data.error.info}`, undefined)
            } else {
                const {current, location} = data;
                callback(undefined, `Le nom  de la ville est ${current.name}, le nom du pay est ${current.location}. Il fait ${current.temperature}`)
            }
        })
}

weather('Strasbourg', 'm', (err, data) => console.log({data}, {err}));


*/

    