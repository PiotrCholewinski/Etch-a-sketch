// creating square divs

for (let i = 0; i < 10; i++) {
    const div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.backgroundColor = "blue";
    document.getElementById("grid").appendChild(div);
    console.log(div)
}


