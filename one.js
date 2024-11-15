let myPromise = new Promise((resolve,reject) =>{
        let ifadult = true;

        if(ifadult){
            resolve("You can vote")
        }
        else{
            reject("You cannot vote")
        }
    })

myPromise.then((Message) =>{
    console.log(Message)
}).catch((error) =>{
    console.log(error)
})