
const algorithmia = require('algorithmia')



function robot(content){
//buscar
fachContentFromWikipedia(content)

//limpar
//sanitizeContent(content)
// quebrar em sentenças
//breakContentIntoSentences(content)

function fachContentFromWikipedia(content){

const algorithmiaAuthenticated = algorithmia('API key temporaraia')
const wikipediaAlgorithm = algorithmiaAuthenticated.algo('web/WikipediaParser/0.1.2')
const wikipediaResponde = wikipediaAlgorithm.pipe(content.searchTerm)
const wikipediaContent = wikipediaResponde.get()

console.log(wikipediaContent)

}     


//console.log(`Recebi com sucesso o contente: ${content.searchTerm}`)


}

module.exports = robot