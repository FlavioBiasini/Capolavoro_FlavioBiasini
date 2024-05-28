let fs = require('fs')
// Funzione per aggiungere un elemento ad un array JSON

function addElementToJSON(json,element){
  json.push(element)
}
// Funzione per scrivere un oggetto JSON su un file
function writeFileJSON(file, dataJSON) {
  fs.writeFile(file, JSON.stringify(dataJSON), (err) => {
    if (err) {
      throw err;
      
    }
  })
}

// Esporta le due funzioni per essere utilizzate in altri file
module.exports = {addElementToJSON, writeFileJSON}