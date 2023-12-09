var sequenceOfBlocks = document.getElementById("all-box");

if (localStorage.getItem("respostaPlanilha")) {

    var curso = localStorage.getItem("curso")
    var data = localStorage.getItem("data")

    var newBlock = document.createElement("div");

    newBlock.textContent = `formandos-${curso}-${data}`;

    newBlock.style.display = "flex";
    newBlock.style.width = "25%";
    newBlock.style.height = "200px";
    newBlock.style.borderWidth = "3px";
    newBlock.style.borderStyle = "solid";
    newBlock.style.borderColor = "#1E709B";
    newBlock.style.alignItems = "center";
    newBlock.style.justifyContent = "center";
    newBlock.style.flexDirection = "column";
    newBlock.style.backgroundColor = "#1E709B"
    newBlock.style.color = "#FFFFFF";
    newBlock.style.fontFamily = "'Inter', sans-serif";
    newBlock.style.marginLeft = "10px"

    sequenceOfBlocks.insertBefore(newBlock, sequenceOfBlocks.firstChild);
}