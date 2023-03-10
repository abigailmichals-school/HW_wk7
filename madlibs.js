let nounArray = ["Computer", "flower", "cat", "cruise ship", "gloves", "toy", "Donut", "table", "television"]
let nounCounter = 0

let adjectiveArray = ["pretty", "second-hand", "flowery", "whispering", "pastoral", "quaint", "relevant", "boring", "weird"]
let adjectiveCounter = 0

let adjectivePastArray = ["delicious", "hideous", "beautiful", "obnoxious", "odd", "talented"]
let adjectivePastCounter = 0

let birdArray = ["bluejay", "woodpecker", "flamingo", "crow", "raven", "peacock", "tit", "sparrow"]
let birdCounter = 0

let roomArray = ["basement", "kitchen", "bathroom", "living room", "toilet room", "porch", "childrens room", "attic"]
let roomCounter = 0

let verbArray = ["inform", "secure", "flood", "restore", "pour", "march", "amend", "describe"]
let verbCounter = 0

let verbPastArray = ["laughed", "danced", "swimmed", "boogied", "screamed", "punched", "shivered", "cried"]
let verbPastCounter = 0

let relativeArray = ["cousin", "aunt", "uncle", "brother", "half sister", "mother", "sister", "nephew"]
let relativeCounter = 0

let liquidArray = ["water", "orange juice", "melted gold", "acid", "dog spit", "vodka", "blood"]
let liquidCounter = 0

let bodyArray = ["arm", "leg", "head", "foot", "toe", "tongue", "nostrils", "mitochondria", "armpits"]
let bodyCounter = 0

let pluralArray = ["cats", "rats", "keys", "cars", "elves", "trees", "rocks", "mittens", "apples", "tables"]
let pluraCounter = 0

let surpriseArray = ["the sun exploded!!!!"]
let surpriseCounter = 0

let nounSpan = document.getElementById('nounSpan');
let adjectiveSpan = document.getElementsByClassName('adjectiveSpan');
let adjectivePastSpan = document.getElementById('adjectivePastSpan');
let birdSpan = document.getElementById('birdSpan');
let roomSpan = document.getElementById('roomSpan');
let verbSpan = document.getElementById('verbSpan');
let verbPastSpan = document.getElementById('verbPastSpan');
let relativeSpan = document.getElementById('relativeSpan');
let liquidSpan = document.getElementById('liquidSpan');
let bodySpan = document.getElementById('bodySpan');
let pluralSpan = document.getElementById('pluralSpan')

nounSpan.addEventListener ('click', ()=>{
    nounSpan.innerHTML = nounArray[nounCounter]
    nounCounter++

    if(nounCounter > nounArray.length -1){
        nounCounter = 0
        
    }
}) 

adjectiveSpan.addEventListener ('click', ()=>{
    adjectiveSpan.innerHTML = adjectiveArray[adjectiveCounter]
    adjectiveCounter++

    if(adjectiveCounter > adjectiveArray.length -1){
        adjectiveCounter = 0
        
    }
}) 

birdSpan.addEventListener ('click', ()=>{
    birdSpan.innerHTML = birdArray[birdCounter]
    birdCounter++

    if(birdCounter > birdArray.length -1){
        birdCounter = 0
        
    }
}) 

roomSpan.addEventListener ('click', ()=>{
    roomSpan.innerHTML = roomArray[roomCounter]
    roomCounter++

    if(roomCounter > roomArray.length -1){
        roomCounter = 0
        
    }
}) 

verbSpan.addEventListener ('click', ()=>{
    verbSpan.innerHTML = verbArray[vervCounter]
    verbCounter++

    if(vervCounter > verbArray.length -1){
        verbCounter = 0
        
    }
}) 

verbPastSpan.addEventListener ('click', ()=>{
    verbPastSpan.innerHTML = verbPastArray[verbPastCounter]
    verbPastCounter++

    if(verbPastCounter > verbPastArray.length -1){
        verbPastCounter = 0
        
    }
}) 

relativeSpan.addEventListener ('click', ()=>{
    relativeSpan.innerHTML = relativeArray[relativeCounter]
    relativeCounter++

    if(relativeCounter > relativeArray.length -1){
        relativeCounter = 0
        
    }
}) 

liquidSpan.addEventListener ('click', ()=>{
    liquidSpan.innerHTML = liquidArray[liquidCounter]
    liquidCounter++

    if(liquidCounter > liquidArray.length -1){
        liquidCounter = 0
        
    }
}) 

bodySpan.addEventListener ('click', ()=>{
    bodySpan.innerHTML = bodyArray[bodyCounter]
    bodyCounter++

    if(bodyCounter > bodyArray.length -1){
        bodyCounter = 0
        
    }
}) 

pluralSpan.addEventListener ('click', ()=>{
    pluralSpan.innerHTML = pluralArray[pluralCounter]
    pluralCounter++

    if(pluralCounter > pluralArray.length -1){
        pluralCounter = 0
        
    }
}) 

surpriseSpan.addEventListener ('click', ()=>{
    surpriseSpan.innerHTML = surpriseArray[surpriseCounter]
    surpriseCounter++

    if(surpriseCounter > surpriseArray.length -1){
        surpriseCounter = 0
        
    }
}) 