function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

onmessage = function(event) {
    console.log("Worker: Message received from main script");
    if (event.data[0] == "need coordinates") {
        console.log("Worker: Message received is Need coordinates");
        postMessage([getRandomInt(0, event.data[1]), getRandomInt(0, event.data[2])]);
    }
}