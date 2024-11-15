const user = new Promise((resolve) =>{
    setTimeout(() => {
        resolve({name : "Netra", id : "1"})
    })
})

user.then((user) => console.log(user.name))