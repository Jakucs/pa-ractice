import { albums } from './data.js';

console.log(albums[0])

for(let i of albums){
    for(let detail of i.details){
        console.log(detail.track_id)
    }
}


// Write your code here

// 