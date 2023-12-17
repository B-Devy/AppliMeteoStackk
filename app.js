const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars')
const { weather } = require('./utils/weather')
const app = express();
const port = 3000;   //80

app.engine('handlebars', engine())
app.set("view engine", "handlebars")
//app.set('views', path.join(__dirname, 'views')) inutile sauf si on change le dossier de place

app.use(express.static(path.join(__dirname, "public")))
//app.use(express.static(path.join(__dirname, "views")))

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/weather',(req, res) => {
    const { location } = req.query;
    console.log("avant fonction weather" + location)

    weather(location, unit = "m", (err, data) => {
        if (err) res.send(`Une erreur s'est produite. ${err}`)
        res.send(data)
    })
}); 

app.get('/about', (req, res) => {
    res.render("about", {
        title: "About",
        name: "Albert"
    });
})

/* manière alternative de géré les 404
app.use((req, res, next) => {
    res.status(404).render('404', {
        title: '404'
    });
});    */

app.get('/about/*', (req, res) => {
    res.render('404_about', {
        title: '404_about'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404'
    })
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Erreur, regardez le terminal!')
})

app.listen(port, () => {
    console.log(`App is listening the port: ${port}`)
})