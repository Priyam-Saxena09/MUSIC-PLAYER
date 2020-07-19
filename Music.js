var list = document.querySelectorAll("strong");
document.querySelectorAll(".player").forEach((but) => {
    var content = but.firstChild.textContent;
    but.style.backgroundImage = `url("images/${but.firstChild.textContent}.jpg")`;
})
var song = "";
list.forEach((li) => {
li.addEventListener("click", (e) => {
     song = e.target;
     if(song.parentNode.previousElementSibling.textContent == 'Just click on any one song icon and enjoy that song')
        {
            document.getElementById("prev").classList.add("hidden");
        }
        else
        {
            document.getElementById("prev").classList.remove("hidden");
        }
        if(song.parentNode.nextElementSibling.firstChild == null)
        {
            document.getElementById("next").classList.add("hidden");
        }
        else
        {
            document.getElementById("next").classList.remove("hidden");
        }
     document.querySelector("h1").classList.add("hidden");
       document.querySelector("body img").classList.remove("hidden");
       document.querySelector("p").classList.add("hidden");
       document.querySelector("body img").src = "images/" + e.target.textContent + ".jpg";
       document.querySelector(".cont").classList.remove("hidden");
       document.querySelector(".cont").innerHTML = `
    <img src = "images/${e.target.textContent}.jpg">
    <audio controls autoplay>
        <source src = "Musics/${e.target.textContent}.mp3" type="audio/mp3"></audio>`;
       document.querySelector("audio").play();
       
       document.querySelector("#b").classList.remove("hidden");
       document.querySelectorAll(".player").forEach((each) => {
        each.classList.add("hidden");
       });

})
})

    document.querySelector("b").addEventListener("click",() => {
        document.querySelectorAll(".player").forEach((each) => {
        each.classList.remove("hidden");
       });
       document.querySelector("h1").classList.remove("hidden");
       document.getElementById("prev").classList.add("hidden");
       document.getElementById("next").classList.add("hidden");
       document.querySelector("body img").classList.add("hidden");
       document.querySelector("p").classList.remove("hidden");
       document.querySelector(".cont").classList.add("hidden");
       document.querySelector("#b").classList.add("hidden");
       document.querySelector("audio").pause();
       document.querySelector("audio").currentTime = 0.0;
    })

    document.querySelector("#prev").addEventListener("click",() => {
        
        if(song.parentNode.previousElementSibling.previousElementSibling.textContent == 'Just click on any one song icon and enjoy that song')
        {
            document.getElementById("prev").classList.add("hidden");
        }
        document.querySelector("h1").classList.add("hidden");
       document.querySelector("body img").classList.remove("hidden");
       document.querySelector("p").classList.add("hidden");
      
       document.getElementById("next").classList.remove("hidden");
       document.querySelector("body img").src = "images/" + song.parentNode.previousElementSibling.firstChild.textContent + ".jpg";
       document.querySelector(".cont").classList.remove("hidden");
       document.querySelector(".cont").innerHTML = `
    <img src = "images/${song.parentNode.previousElementSibling.firstChild.textContent}.jpg">
    <audio controls autoplay>
        <source src = "Musics/${song.parentNode.previousElementSibling.firstChild.textContent}.mp3" type="audio/mp3"></audio>`;
       document.querySelector("audio").play();
       song = song.parentNode.previousElementSibling.firstChild;
       document.querySelector("#b").classList.remove("hidden");
       document.querySelectorAll(".player").forEach((each) => {
        each.classList.add("hidden");
    })
})

document.querySelector("#next").addEventListener("click",() => {
    console.log(song.parentNode.nextElementSibling.nextElementSibling.firstChild);
    if(song.parentNode.nextElementSibling.nextElementSibling.firstChild == null)
        {
            document.getElementById("next").classList.add("hidden");
        }
    document.querySelector("h1").classList.add("hidden");
       document.querySelector("body img").classList.remove("hidden");
       document.querySelector("p").classList.add("hidden");
       document.getElementById("prev").classList.remove("hidden");
    
       document.querySelector("body img").src = "images/" + song.parentNode.nextElementSibling.firstChild.textContent + ".jpg";
       document.querySelector(".cont").classList.remove("hidden");
       document.querySelector(".cont").innerHTML = `
    <img src = "images/${song.parentNode.nextElementSibling.firstChild.textContent}.jpg">
    <audio controls autoplay>
        <source src = "Musics/${song.parentNode.nextElementSibling.firstChild.textContent}.mp3" type="audio/mp3"></audio>`;
       document.querySelector("audio").play();
       song = song.parentNode.nextElementSibling.firstChild;
       document.querySelector("#b").classList.remove("hidden");
       document.querySelectorAll(".player").forEach((each) => {
        each.classList.add("hidden");
    })
})