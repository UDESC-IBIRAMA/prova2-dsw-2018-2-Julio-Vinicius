let save =  document.querySelector('button.botao');
let array = [];
save.addEventListener('click', salvar);

function salvar() {
    let titulo = document.querySelector('input.titulo');
    array += {titulo};
    console.log(array);
}

let resulado =  document.querySelector('input.botao');

resulado.addEventListener('click', resultado);

function resultado() {
    let  table = document.createElement('table');
    array.forEach(function (e) {
        let row = document.createElement('tr');
        row = e;
        table.appendChild(row);
    })
    document.appendChild(table);
}