import { albums } from './data.js';

console.log(albums[0])
let trackName = [];

for(let album of albums){
    for(let detail of album.details){
        console.log(detail)
        trackName.unshift(detail)
    }
}
console.log(trackName[0].name)


// Write your code here

// 