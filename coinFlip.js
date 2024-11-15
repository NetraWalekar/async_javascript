const coin = new Promise((resolve,reject) =>{
    const isHead = Math.random() < 0.5
    setTimeout(() =>{
        isHead ? resolve("Heads") : reject("Tails")
    },2000)
})

coin.then((result) => console.log("You get", result)).catch((error) => console.log("You get ", error))