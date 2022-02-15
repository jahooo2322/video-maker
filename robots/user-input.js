const readline = require('readline-sync')
const state = require('./state.js')

function robot(){

const content = {
maximumSentences: 7

}
    
content.searchTerm = askAndReturnSerchTerm()
content.prefix = askAndReturnPrefix()

state.save(content)

function askAndReturnSerchTerm(){
    return readline.question('Type a wikipedia search term:')
    }
    
    function askAndReturnPrefix(){
    const prefixes = ['Who is', 'What is', 'The history of']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option:')
    const selectedPrefixText  = prefixes[selectedPrefixIndex]
    
    
    //console.log(selectedPrefixText)
    return selectedPrefixText
    
    }
  //  console.log(`Recebi com sucesso o contente: ${content.searchTerm}`)
    
    
    }
    
    module.exports = robot