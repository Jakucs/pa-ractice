import { albums } from './data.js';

console.log(albums[0])
let trackName = [];

for(let album of albums){
    //console.log(album)
    for(let detail of album.details){
        //console.log(detail.name)
        trackName.push(detail.name)
    }
}

/* for(let number in trackName){
    console.log(number)
} */
console.log(trackName[3502])


// Write your code here

// 