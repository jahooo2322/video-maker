const readline = require('readline-sync')


function start(){

const content = {}

content.searchTerm = askAndReturnSerchTerm()
content.prefix = askAndReturnPrefix()

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



 console.log(content)


}

start()