
setInterval(() => {
    let date = new Date();
    let hour = document.querySelector(".h");
    let minute = document.querySelector(".m");
    let second = document.querySelector(".s");
    let inn = document.querySelector(".inn");
    
    let getH = date.getHours();
    let getM = date.getMinutes();
    let getS = date.getSeconds();
    if(getH > 12){
        getH = date.getHours()-12;
        inn.innerText = "AM";
    }
    else{
        getH = date.getHours();
        inn.innerText = "PM";
    }
    (getH<=9)?hour.innerText = `0${getH}`:hour.innerText = getH;

    (getM<=9)?minute.innerText = `0${getM}`:minute.innerText = getM;

    (getS<=9)?second.innerText = `0${getS}`:second.innerText = getS;
   
}, 1000);
