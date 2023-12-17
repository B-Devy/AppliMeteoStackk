const weather = (location, unit, callback) => {
    
    const url = `http://api.weatherstack.com/current?access_key=abee8862fc6dbb68a3c59aaa5fd7b67d&query=${encodeURIComponent(location)}&units=${unit}`
    //const url = `http://api.weatherstack.com/current?access_key=abee8862fc6dbb68a3c59aaa5fd7b67d&query=Glasgow}&units=m`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.success === false) {
                callback(`Impossible de renvoyer vos informations. Error ${data.error.code}: ${data.error.info}`, undefined)
            } else {
                const {current, location} = data;

                callback(undefined, {
                    location: location.name,
                    country: location.country,
                    temperature: current.temperature,
                    feelslike: current.feelslike,
                    weather_descriptions: current.weather_descriptions[0]
                })
            }
        })
}
module.exports = { weather };

