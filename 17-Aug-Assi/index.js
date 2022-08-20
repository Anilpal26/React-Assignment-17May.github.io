const body = document.getElementById("body");

let count = 0;

const changeValue = _ => {
    console.log("Its working...!")
    
    if(count%2==0){
        body.style.backgroundColor = "pink";
        body.style.color = "white"
    }else if(count%2!=0){
        body.style.backgroundColor = "white";
        body.style.color = "black"
    }
    count++;
    console.log(count)

}





