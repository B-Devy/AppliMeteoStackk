const fs = require('fs');
const { writeFileSync, readFileSync } = require('fs');
const { argv } = require('process');
const express = require('express')
const app = express()
const port = 3000
const jsonToObject = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))

//console.log(fs)
//console.log(argv)
//console.log(process)
console.log(jsonToObject)

app.get('/', (req, res) => {
    //console.log(app)
  res.send({
        "nom": "Pierrot",
        "age": "45",
        "signe": "vierge"
    })
})

let newData = {
  nom: "Pierrot",
  age: 35,
  signe: "vierge"
}
const objToJSON = JSON.stringify(newData);
writeFileSync('./data.json', objToJSON)

const myData = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))
myData.nom = "Marie";

const objToJson = JSON.stringify(myData);
writeFileSync('./data.json', objToJson)

console.log(objToJson)


debugger

app.listen(port, () => {
  console.log(`Example app listening on port ${port}.`) 
})