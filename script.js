import { albums } from './data.js';

console.log(albums[0])

for(let i of albums){
    for(let detail of i.details){
        console.log(detail.track_id)
    }
}


// Write your code here

function getSongCountInFirst(albums){
    let returnNumber = 0;
   
        for(let detailsNumber in albums[0].details){
            //console.log(detailsNumber)
            returnNumber=detailsNumber
        }
    
        returnNumber++

    return returnNumber
}

console.log(getSongCountInFirst(albums))




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