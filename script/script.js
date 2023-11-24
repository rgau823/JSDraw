const pad = document.querySelector(".pad");

let color = "rgb(255, 254, 249)";

for (let i = 0; i < 16; i++) {
    let pixelRow = document.createElement("div");
    pixelRow.style.display = "block";
    for (let j = 0; j < 16; j++) {
        let pixel = document.createElement("div");
        pixel.style.backgroundColor = "rgb(255, 254, 249)";
        pixel.style.width = "30px";
        pixel.style.height = "30px";
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = color;
        });
        pixelRow.appendChild(pixel);
    }
    pad.appendChild(pixelRow);
}

const black = document.querySelector("#black");

black.addEventListener("click", () => {
    addEventListener("mousemove", (event) => {
        color = "black";
    });
});

const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
    pad.childNodes.forEach((row) => {
        row.childNodes.forEach((pixel) => {
            pixel.style.backgroundColor = "rgb(255, 254, 249)";
        });
    });
    color = "rgb(255, 254, 249)";
});

const random = document.querySelector("#random");

random.addEventListener("click", () => {
    addEventListener("mousemove", (event) => {
        randomColor();
    });
});

function randomColor() {
    let rgb1 = Math.floor(Math.random() * 255);
    let rgb2 = Math.floor(Math.random() * 255);
    let rgb3 = Math.floor(Math.random() * 255);
    color = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
}
