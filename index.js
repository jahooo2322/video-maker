
const robots = {
userInput: require('./robots/user-input.js'),    
wikiText: require('./robots/wiki-text.js'),
state: require('./robots/state.js'),
text: require('./robots/text.js'),
image: require('./robots/image.js'),

}

async function start(){

//await robots.image()
await robots.wikiText()

//const content = robots.state.load()    
//console.dir(content, {depth: null})



}

start()