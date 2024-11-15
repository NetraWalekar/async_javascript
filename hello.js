const hello = new Promise((resolve) =>{
    setTimeout(() => {
        resolve("Hello")
    },2000)
})

hello.then((message) => console.log(message))