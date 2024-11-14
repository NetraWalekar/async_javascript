function displayUserData(){
    setTimeout(() => {
        console.log("User Data Fetch")
    },2000)
}

async function display() {
    const result = await displayUserData();
    console.log("user data processing")
}

display();