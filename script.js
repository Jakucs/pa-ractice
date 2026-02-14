import { albums } from './data.js';

//console.log(albums[0])
/* let trackName = [];

for(let album of albums){
    //console.log(album)
for(let album of albums){
    }
}

for(let number in trackName){
for(let number in trackName){
    console.log(number)
}
}
console.log(trackName[3502])

 */

// Write your code here

/* function getSongCountInFirst(albums){
    let returnNumber = 0;

    for(let i in albums[0].details){
        returnNumber++
    }
   return returnNumber
        
}

console.log(getSongCountInFirst(albums)) */

function getAvailableAmount(){
    let counter = 0;
    for(let i of albums){
        if(i.status=="available"){
            counter++
        }
    }

    return counter
}

console.log(getAvailableAmount())