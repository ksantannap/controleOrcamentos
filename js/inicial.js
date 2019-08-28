document.getElementById('titulo').textContent = "Controle de orçamentos";

document.getElementById('user').textContent = "Kaio Santana";

document.getElementById('novo-orcamento').style.display = 'none';
document.getElementById('novo-orcamento').style.visibility = 'visible';

function novoOrcamento(event) {

    document.getElementById('lista-orcamentos').style.visibility = 'hidden';
    document.getElementById('lista-orcamentos').style.display = 'none';

    document.getElementById('novo-orcamento').style.display = 'block';
    document.getElementById('novo-orcamento').style.visibility = 'visible';
    console.log("Iremos criar um novo orçamento");

}

(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

function salvarNovoOrcamento() {

    const tituloOrcamento = document.getElementById('titulo-orcamento').value;
    const descricaoOrcamento = document.getElementById('descricao-orcamento').value;

    if (tituloOrcamento != null && tituloOrcamento != ''
        && descricaoOrcamento != null && descricaoOrcamento != '') {

        swal({
            title: "Bom trabalho!",
            text: "Você acabou de salvar o orçamento " + tituloOrcamento + " !",
            icon: "success",
            button: "OK!",
        });
    }


}
function cancelarNovoOrcamento(event) {
    /* swal({
        title: "Cancelar?",
        text: "Deseja realmente cancelar o orçamento que estava criando?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((confirmCancel) => {
        if (confirmCancel) {
            document.getElementById('lista-orcamentos').style.visibility = 'visible';
            document.getElementById('lista-orcamentos').style.display = 'block';
            document.getElementById('lista-orcamentos').style.display = null;
            document.getElementById('novo-orcamento').style.display = 'none';
        } 
      }); */
    document.getElementById('lista-orcamentos').style.visibility = 'visible';
    document.getElementById('lista-orcamentos').style.display = 'block';
    document.getElementById('lista-orcamentos').style.display = null;
    document.getElementById('novo-orcamento').style.display = 'none';
}