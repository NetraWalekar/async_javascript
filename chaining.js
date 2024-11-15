function chaining(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(10);
        });
    })
}

chaining().then((number) => number + 2).then((number) => number * 2).then((result) => console.log(result))