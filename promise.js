function userData(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("user data fetch")
        },4000)
    })
}

async function display() {
    console.log("Hi from display")
    await userData();
}

display();
console.log("Hello from outside");