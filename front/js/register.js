var buttonConfirm = document.getElementById("button-confirm");
var inputFile = document.getElementById("arquivoInput");
var label = document.getElementById("label-upload");

inputFile.addEventListener("change", function () {
    if (inputFile.files.length > 0) {
        label.textContent = `${arquivoInput.files[0].name}`;
        label.style.fontWeight = "600"
    } else {
        label.textContent = "UPLOAD no formato .xlsx";
    }
});

buttonConfirm.addEventListener("click", function () {
    var inputFile = document.getElementById("arquivoInput");
    var label = document.getElementById("label-upload");
    var cursoInput = document.getElementById('curso')
    var dataInput = document.getElementById('data')

    const arquivo = inputFile.files[0];

    const formData = new FormData();
    formData.append('File', arquivo);

    fetch('http://localhost:3000/planilha', {
        method: 'POST',
        body: formData
    })
    .then((response) => response.json())
    .then((dataOficial) => {
        localStorage.setItem('respostaPlanilha', JSON.stringify(dataOficial));
        localStorage.setItem('curso', cursoInput.value)
        localStorage.setItem('data', dataInput.value)

        window.location.href = '../index.html';
    })
    .catch((error) => {
        console.error("Erro:", error);
    });
});