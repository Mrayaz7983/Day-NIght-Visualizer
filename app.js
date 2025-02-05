function changebackgroundImg() {
    let body = document.body;
    let hours = new Date().getHours();

    if (hours >= 6 && hours < 18) {
        body.style.backgroundImage = "url('Day.jpg')";
        body.style.backgroundColor = "#87CEEB";
    } else {
        body.style.backgroundImage = "url('Night.jpg')";
        body.style.backgroundColor = "#1a1a2e";
    }

    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.height = "100vh";
}

function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    let timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").innerText = timeString;
}

setInterval(updateClock, 1000);

setInterval(changebackgroundImg, 60000);

updateClock();
changebackgroundImg();
