const fetch = require("cross-fetch")
const readline = require('readline-sync')

async function robotWiki() {

    //const searchTerm = content

    searchTerm = askAndReturnSerchTerm()

    function askAndReturnSerchTerm(){
        return readline.question('Type a wikipedia search term:')
        }

        // configurar a limpeza do retorno 
        
    const url = `https://pt.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=4&prop=extracts|pageimages&pithumbsize=400&origin=*&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${searchTerm}`;
    const res = await fetch(url);
    const data = await res.json();

   // document.getElementById('response').innerText = JSON.stringify(data, null, 4);

    //console.log(data)







    

    console.dir(data, {depth: null})
process.exit(0)
}

module.exports = robotWiki