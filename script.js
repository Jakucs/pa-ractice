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

/* function getOneWordArtistNames(){
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

console.log(getOneWordArtistNames()) */



/* function getMostComplexSong(){
    let mb = 0;
    let result;
    for(let album of albums){
        for(let detail of album.details){
            if(mb < detail.bytes / detail.milliseconds){
                mb = detail.bytes / detail.milliseconds
                result = album.name
            }
        }
    }
    return result
}


console.log(getMostComplexSong()) */


/* for(let album of albums){
    if(album.requires_shipping==true){
        console.log(album)
    }
} */



/* for(let album of albums){
    console.log(album.price)
} */

/* let array = [];

for(let album of albums){
    array.push(album.price)
}

let result = 0;
for(let i of array){
    result += i
}
console.log(result)
let result2 = result/array.length

console.log(result2) */

/* let details=[];

for(let album of albums){
    for(let detail of album.details){
        details.push(detail)
    }
}
console.log(details.length) */


/* for(let album of albums){
    if(album.status=="available"){
        console.log(album)
    }
} */
/* let array = [];
    for(let album of albums){
        for(let detail of album.details){
            if(detail.milliseconds >= 60000){
                let string = `name: ${detail.name}, composer: ${detail.composer}`
                array.push(string)
            }
        }
    }
    console.log(array) */


/* let main = document.getElementById("root")

for(let album of albums){
    let element = document.createElement("div")
    let p = document.createElement("h2")
    p.style.color="red"
    p.textContent = album.name
    element.appendChild(p)
    main.appendChild(element)

    let status = document.createElement("div")
    let statusParagraph = document.createElement("p")
    statusParagraph.textContent=album.status
    statusParagraph.style.color="purple"
    status.appendChild(statusParagraph)
    element.appendChild(status)
    main.appendChild(element)


    let price = document.createElement("div")
    let priceParagraph = document.createElement("p")
    priceParagraph.textContent=album.price
    priceParagraph.style.color="green"
    price.appendChild(priceParagraph)
    element.appendChild(price)
    main.appendChild(element)



    for(let detail of album.details){
        let div = document.createElement("div")
        let track = document.createElement("p")
        track.textContent = detail.name
        div.appendChild(track)
        main.appendChild(div)



        let div2 = document.createElement("div2")
        let p = document.createElement("p")
        p.textContent = `seconds: ${detail.milliseconds/1000}`
        p.style.backgroundColor = "yellow"
        p.style.fontSize = "10px"
        p.style.textTransform = "uppercase"
        p.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.3)"
        p.style.textAlign = "center"
        p.style.cursor = "pointer"
        div.appendChild(p)
        main.appendChild(div2)
    }
} */
/* let counter = 0;
for(let album of albums){
    for(let track of album.details){
        counter++

    }
}

console.log(counter) */


/* let albumLength = albums.length -1

console.log(albums[albumLength].name) */

/* function getSongCountInFirst(){
    let counter = 0;
    for(let detail of albums[0].details){
        counter++
    }
    return counter
}

console.log(getSongCountInFirst()) */


/* function getAvailableAmount(){
    for(let album of albums){
        if(!album.status==='available'){
            console.log(album)
        }
    }
}

getAvailableAmount() */

/* function searchAlbums(namePart){
    let albumsWithNamePart = []
    for(let album of albums){
        if(album.name.toLowerCase().includes(namePart.toLowerCase())){
            albumsWithNamePart.push(album)
        }
    }
    return albumsWithNamePart
}

console.log(searchAlbums("World")) */

/* function averageTrackCount(){
    let tracksPerAlbum = []
    for(let album of albums){
        let tracksNumber = album.details.length;
        tracksPerAlbum.push(tracksNumber)
    }

    let sum = 0;
    for(let track of tracksPerAlbum){
        sum+= track
    }
    let result = sum/tracksPerAlbum.length
    return result
}

console.log(averageTrackCount()) */

/* function averageTrackCount(){
    let tracksPerAlbum = []
    for(let album of albums){
        let tracksNumber = album.details.length;
        tracksPerAlbum.push(tracksNumber)
    }

    let sum = tracksPerAlbum.reduce((acc, current)=>{
        return acc + current
    }, 0)
    let result = sum/tracksPerAlbum.length
    return result
}

console.log(averageTrackCount()) */

/* function getAlbumsWithHigherPrice(minPrice){
    let determinedAlbums = [];
    for(let album of albums){
        if(album.price > minPrice){
            determinedAlbums.push(album)
        }
    }
    let sortedDeterminedAlbums = determinedAlbums.sort((a, b)=> {
        return a.price - b.price
    })
    return sortedDeterminedAlbums;
}

console.log(getAlbumsWithHigherPrice("1000")) */

/* function getAlbumRuntime(album){
    let milliseconds = 0;
    for(let detail of album.details){
        milliseconds += detail.milliseconds
    }
    let second = milliseconds/1000
    return second
} */



/* for(let album of albums){
    console.log(getAlbumRuntime(album))
} */


/* function getMostValuableAlbumForRuntime(){
    let result = 0;
    let finalAlbum;
    for(let album of albums){
        let runtime = getAlbumRuntime(album)
        if(result<album.price / runtime){
            result = album.price / runtime
            finalAlbum=album
        }
    }
    console.log(finalAlbum)
}

getMostValuableAlbumForRuntime() */
/* let root = document.getElementById("root")
for(let album of albums){
    let div = document.createElement("div")
    let h2 = document.createElement("h2")
    h2.textContent = album.name
    div.appendChild(h2)
    root.appendChild(div)
} */




/*     task1:
Collect all the albums that have a price below 900 and have more than 5 tracks

task2:
Find the longest album (the one that takes the most time to play)

task3:
Create a button on the top of the page. When we click on it, it displays the longest album’s name in a different div below the button. */


/* function collectAlbums(price, long){
    let result = [];
    for(let album of albums){
        if(album.price<price && album.details.length>long){
            result.push(album)
        }
    }
    return result
}
console.log(collectAlbums(900, 5))


function searchLongestAlbum(){
    let biggestMilliSecond = 0;
    let longestAlbum;


    for(let album of albums){
        let albumMilliseconds=0;
        for(let track of album.details){
            albumMilliseconds+=track.milliseconds
        }
        if(biggestMilliSecond<albumMilliseconds){
            biggestMilliSecond = albumMilliseconds
            longestAlbum = album
            
        }
        //console.log(albumMilliseconds)
    }
    console.log("albumItself", longestAlbum)
    console.log("biggestMilliSecond", biggestMilliSecond)
    return longestAlbum
}

let longestAlbum = searchLongestAlbum()


function addElement(){
    let root = document.getElementById("root")
    let div = document.createElement("div")
    let button = document.createElement("button")
    button.textContent = "Button"
    
    let h2 = document.createElement("h2")
    h2.textContent = longestAlbum.name
    button.addEventListener("click", function(e){
            div.appendChild(h2)
            console.log(h2.parentElement)
    })

    div.appendChild(button)
    root.appendChild(div)
}

addElement() */


/* function findTheLongestAlbum(){
    let biggestTime=0;
    let longestAlbum;
    for(let album of albums){
        let time = 0;
        for(let track of album.details){
            time += track.milliseconds
        }
        if(biggestTime<time){
            biggestTime=time
            longestAlbum=album
        }
        //console.log("album: ", album, "time: ", time)
    }
    console.log("legnagyobb idő: ", biggestTime)
    console.log("Hozzá tartozó album: ", longestAlbum)
}

findTheLongestAlbum() */


/* function findTheBiggestAlbum(){
    let biggestAlbumSize=0;
    let biggestAlbum;
    for(let album of albums){
        for(let track of album.details){
            let tracksByte=0;
            //console.log(track)
            tracksByte+= track.bytes
            if(biggestAlbumSize<tracksByte){
                biggestAlbumSize=tracksByte
                biggestAlbum=album
            }
        }
    }
    console.log("biggestAlbumSize", biggestAlbumSize)
    console.log("album", biggestAlbum)
}

findTheBiggestAlbum() */



/* function higherThan(){
    let filtered = albums.filter(album=>album.price>1570)
    //console.log(filtered)

    let mapped = albums.map(album=>album.name)
    //console.log(mapped)

    let sortedAlbum = albums.sort((a, b) => a.price - b.price)
    //console.log(sortedAlbum)

    let id2 = albums.find(albumid2 => albumid2.id == 2)
    console.log(id2)
}

higherThan() */




/* task1:
Collect all the albums that cost less than 1000 and title starts with 'T' (case-insensitively)

task2:
What is the average price of the available albums? Return the average price rounded to 2 decimals (e.g. 10.15)

Task3:
Create two input fields and a button. When we click on it, it displays only the filtered albums on your website. Inputs and the button don’t disappear. */

/* function addDeterminedAlbums(){
    let array = [];
    for(let album of albums){
        if(album.price < 1000 && album.name.toLowerCase().startsWith("t")){
            array.push(album.name)
        }
    }
    return array
}

console.log(addDeterminedAlbums()) */



/* function addDeterminedAlbums(){
    return albums
            .filter(album=> album.price<1000 && album.name.toLowerCase().startsWith("t"))
            .map(album=>album.name)
}

console.log(addDeterminedAlbums()) */

/* function countAlbums(){
    let availableAlbums = [];
    let prices = [];
    for(let album of albums){
        if(album.status == "available"){
            prices.push(album.price)
        }
    }
    //console.log(availableAlbums)


    const sum = prices.reduce((acc, current) => acc + current, 0)
    let result = sum / prices.length - 1
    console.log(result)
    let result2 = result.toFixed(2)
    console.log(result2)
    return result2
}

countAlbums() */





/* function createElements(){
let root = document.getElementById("root")

let input = document.createElement("input")
input.placeholder="input"
root.appendChild(input)

let button = document.createElement("button")
button.textContent="button"
button.style.margin="20px"
root.appendChild(button)

let input2 = document.createElement("input")
input2.placeholder="input2"
root.appendChild(input2)

let button2 = document.createElement("button")
button2.textContent="button2"
button2.style.margin="20px"
root.appendChild(button2)



let returnValue = countAlbums()
let div = document.createElement("div")
let p = document.createElement("p")
p.textContent=returnValue
button.addEventListener("click", function(e) {
    input.placeholder=p
    div.appendChild(p)
    root.appendChild(div)
})

button2.addEventListener("click", function(e) {
    input2.placeholder=p
    div.appendChild(p)
    root.appendChild(div)
})
}

createElements() */


//Reduce

const numbers = [5, 12, 8, 130, 44];

// let result = numbers.reduce((acc, current) => acc + current, 0)
//console.log(result)

/* let result2 = numbers.reduce((acc, current) => {
    if(current>10){
        return acc + 1;
    }else{
        return acc;
    }
}, 0)
console.log(result2) */

/* let result3 = numbers.reduce((acc, current) => {
    if(acc<current){
        acc = current
    }
    return acc
}, 0)

console.log(result3) */

// const numbers2 = [5, 12, 8, 130, 44];

/* let result = numbers2.reduce((acc, current) => {
    if(current>10){
        return acc + 1
    }else{
        return acc
    }
})

console.log(result) */

/* const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

let result = fruits.reduce((acc, current) => {
    if(acc[current]){
        acc[current] += 1
    }else{
        acc[current] = 1
    }
    return acc
}, {})

console.log(result) */


/* const nested = [[1, 2], [3, 4], [5]];

let result = nested.reduce((acc, current) => {
    return acc.concat(current);
}, []);

console.log(result); */

let array = [];
for(let album of albums){
    if(album.status=="available" && album.price>=1000 && album.price<=2000){
        for(let track of album.details){
            if(track.milliseconds >= 240000 && !array.includes(album.name)){
                array.push(album.name)
            }
        }
    }
    console.log(album)
}
