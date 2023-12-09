var buttonConfirm = document.getElementById("button-confirm");

buttonConfirm.addEventListener("click", function () {
    var inputFile = document.getElementById("arquivoInput");
    var label = document.getElementById("label-upload")
    console.log(label.textContent)
    const arquivo = inputFile.files[0];
    console.log("O QUE VEM");
    console.log(arquivo);

    const formData = new FormData();
    formData.append('File', arquivo);

    fetch('http://localhost:3000/planilha', {
        method: 'POST',
        body: formData
    })
    .then((response) => response.json())
    .then((dataOficial) => {
        console.log("DEU CERTOOO");
        console.log(dataOficial);
        label.textContent = `${dataOficial}`
    })
    .catch((error) => {
        console.error("Erro:", error);
    });
});