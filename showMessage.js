function Message(){
    setTimeout(() => {
        console.log("Hello")
    },2000)
}

async function showMessage(){
    await Message();
    console.log("processing")
}

showMessage();
