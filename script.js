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

/* function getAlbumRuntime(product){
    let millisecondsOfEvveryAlbum=0;
    for(let i of product.details){
        millisecondsOfEvveryAlbum+=i.milliseconds
    }

    return millisecondsOfEvveryAlbum/1000
}


/* for(let album of albums){
    console.log(getAlbumRuntime(album))
} */


/* function getMostValuableAlbumForRuntime(){
    let result = []
    let biggestRatio = 0;
    
    // console.log(runtimes)
    // console.log(prices)

    for(let album of albums){
        let second = getAlbumRuntime(album)
        if(biggestRatio<album.price / second){
            biggestRatio = album.price / second
            result=[];
            result.push(album)
        }
        
    }
    return result
}

console.log(getMostValuableAlbumForRuntime()) */




/* function getAlbumRuntime(product){
    let millisecondsOfEvveryAlbum=0;
    for(let i of product.details){
        millisecondsOfEvveryAlbum+=i.milliseconds
    }

    return millisecondsOfEvveryAlbum/1000
} */


/* for(let album of albums){
    console.log(getAlbumRuntime(album))
} */


/* function getMostValuableAlbumForRuntime(){
    let biggestRatio = 0;
    let result = [];
    for(let album of albums){
        let runtime = getAlbumRuntime(album)
        let price = album.price
        let value = price/runtime
        if(biggestRatio<value){
            result = []
            biggestRatio=value
            result.push(album)
        }
    }
    return result
}

console.log(getMostValuableAlbumForRuntime()) */



/* function getGenreCount(album){
    let result = [];
    for(let i of album.details){
        if(!result.includes(i.genre_id))
        result.push(i.genre_id)
    }
    return result.length
} */

/* for(let album of albums){
    console.log(getGenreCount(album))
    //console.log(album)
} */


/* function getAlbumsWithMultipleGenres(){
    let result = []
    for(let album of albums){
        let genres = getGenreCount(album)
        if(genres>1){
            result.push(album)
        }
    }
    return result
}

console.log(getAlbumsWithMultipleGenres()) */

function getOneWordArtistNames(){
    let vendors = [];
    for(let album of albums){
        if(!vendors.includes(album.vendor.name)){
            if(!album.vendor.name.includes(" ")){
                vendors.push(album.vendor.name)
            }
        }
    }
    return vendors
}

console.log(getOneWordArtistNames())

