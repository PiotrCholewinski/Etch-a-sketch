// creating square divs

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.style.width = "25px";
    div.style.height = "25px";
    div.style.backgroundColor = "white";
    div.style.border = "solid black";
    div.style.borderWidth = "0.6px";
    div.style.boxSizing = "border-box";
    document.getElementById("grid").appendChild(div);
    console.log(div)
}


