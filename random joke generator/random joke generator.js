let punchLine = document.getElementById("punchline");
let url = "https://official-joke-api.appspot.com/random_joke";
let btn = document.getElementById("getJoke");
let setUp = document.getElementById("setup");
btn.onclick = async function() {
    let respone = await fetch(url);
    var data = await respone.json();
    // console.log(data);
    setUp.innerHTML = data.setup;
    punchLine.innerHTML = data.punchline;


}