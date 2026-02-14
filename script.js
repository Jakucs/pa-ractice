import { albums } from './data.js';

/* console.log(albums[0])

for(let i of albums){
    for(let detail of i.details){
        console.log(detail.track_id)
    }
} */


// Write your code here

/* function getSongCountInFirst(albums){
    let returnNumber = 0;
   
        for(let detailsNumber in albums[0].details){
            //console.log(detailsNumber)
            returnNumber=detailsNumber
        }
    
        returnNumber++

    return returnNumber
}

console.log(getSongCountInFirst(albums)) */




/* function getSongCountInFirst(albums){
    let returnNumber = 0;

    for(let i in albums[0].details){
        returnNumber++
    }
   return returnNumber
        
}

console.log(getSongCountInFirst(albums)) */

/* function getAvailableAmount(){
    let counter = 0;
    for(let i of albums){
        if(i.status=="available"){
            counter++
        }
    }

    return counter
}

console.log(getAvailableAmount()) */


/* function searchAlbums(namePart){
    for(let i of albums){
        if(i.name.toLowerCase().includes(namePart)){
            console.log(i)
        }
    }
}

searchAlbums("for") */


/* function searchAlbums(namePart){
    for(let i of albums){
        for(let j of i.details){
            if(j.name.toLowerCase().includes(namePart.toLowerCase())){
                console.log(j)
            }
        }
    }
}

searchAlbums("Hello") */

/* function averageTrackCount(){
let array = []
let counter = 0;
    for(let album of albums){
        let numberOfTrack = 0;
        for(let j of album.details){
            numberOfTrack++
        }
        array.push(numberOfTrack)
    }
    console.log(array)

    for(let i of array){
        counter+=i
    }
    let result = counter/array.length
    return result
}

console.log(averageTrackCount()) */

/* function getAlbumsWithHigherPrice(minPrice){
    let biggerThanMinPrice=[]
    for(let i of albums){
        if(i.price>minPrice){
            biggerThanMinPrice.push(i)
        }
    }
    return biggerThanMinPrice
}

console.log(getAlbumsWithHigherPrice(1000)) */

function getAlbumRuntime(product){
    let millisecondsOfEvveryAlbum=0;
    for(let i of product.details){
        millisecondsOfEvveryAlbum+=i.milliseconds
    }

    return millisecondsOfEvveryAlbum/1000
}


/* for(let album of albums){
    console.log(getAlbumRuntime(album))
} */


function getMostValuableAlbumForRuntime(){
    let runtimes = [];
    let prices = [];
    let result = [];
    for(let album of albums){
        //console.log(album)
        runtimes.push(getAlbumRuntime(album))
        
        prices.push(album.price)
    }
    // console.log(runtimes)
    // console.log(prices)

    for(let i of prices){
        for(let j of runtimes){
            result.push(i/j)
        }
    }
    let maxNumber = 0;
    for(let i of result){
        if(i>maxNumber){
            maxNumber=i
        }
    }
    console.log(maxNumber)
}

getMostValuableAlbumForRuntime()