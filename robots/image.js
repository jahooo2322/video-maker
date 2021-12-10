const {google} = require('googleapis');
const customSearch = google.customsearch('v1');
const state = require('./state.js');

const googleSearchCredentials = require('../credentials/google-search.json')

async function robot(){

const content = state.load()




//await fetchImagesOfAllSentences(content)

state.save(content)


/*
async function fetchImagesOfAllSentences(content){

    //console.log(content)
   // const contentString = JSON.stringify(content);


for (const sentence of content.sentences){
   // console.log(sentence)
    const query = `${content.searchTerm} ${sentence.keywords[0]}`
    sentence.images = await fetchGoogleAndReturnImagesLinks(query)
    sentence.googleSearchQuery = query

}

}
*/

const imagesArray = await fetchGoogleAndReturnImagesLinks('Michael Jackson')
console.dir(imagesArray, {depth: null})
process.exit(0)


/*

async function fetchImagesOfAllSentences(content) {
    for (let sentenceIndex = 0; sentenceIndex < content.sentences.length; sentenceIndex++) {
      let query

      if (sentenceIndex === 0) {
        query = `${content.searchTerm}`
      } else {
        query = `${content.searchTerm} ${content.sentences[sentenceIndex].keywords[0]}`
      }

     // console.log(`> [image-robot] Querying Google Images with: "${query}"`)

      content.sentences[sentenceIndex].images = await fetchGoogleAndReturnImagesLinks(query)
      content.sentences[sentenceIndex].googleSearchQuery = query
    }
  }

  */


async function fetchGoogleAndReturnImagesLinks(query){
const response = await customSearch.cse.list({
auth: googleSearchCredentials.apiKey,
cx: googleSearchCredentials.searchEngineId, 
cr: 'pt-BR',
rl: "lang_pt",
q: query,
searchType: 'image',
imgSize: 'huge',
num:4
})

const imagesUrl = response.data.items.map((item) => {

return item.link
})
return imagesUrl

}

}

module.exports = robot