function changeFitler(){
    let dog_filter = document.getElementById("dog_filter");
    if(dog_filter.getAttribute("src")=="dog.jpeg"){
        dog_filter.setAttribute("src","monochomatic_dog.jpg");
    }
    else if(dog_filter.getAttribute("src")=="monochomatic_dog.jpg"){
        dog_filter.setAttribute("src","vintage_dog.jpg");
    }
    else if(dog_filter.getAttribute("src")=="vintage_dog.jpg"){
        dog_filter.setAttribute("src","starry_dog.jpg");
    }
    else{
        dog_filter.setAttribute("src","dog.jpeg");
    }

}

let Pictures = ["dog.jpeg","cat.jpg","tree.jpg","bird.jpg"];
let i = 0;

function playbackPictures(){
    i++;
    if(i%Pictures.length==0){
        i = 0;
    }
    let playback_img = document.getElementById("playback_img");
    console.log(Pictures[i]);
    playback_img.setAttribute("src",Pictures[i]);
}

window.onload = function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}