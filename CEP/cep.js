function reset_formulario(){
    document.getElementsById('rua').value=('')
    document.getElementsById('bairro').value=('')
    document.getElementsById('cidade').value=('')
    document.getElementsById('uf').value=('')
}

function callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
        document.getElementById('ibge').value=(conteudo.ibge);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}
function pesquisacep(valor){
    var cep = valor.replace(/\D/g, '')
    // Valor diferente de 0 ou valor difente de vazio
    if(cep != ""){
        //Verifica os valores do cep
        let validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto não tem resposta.
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('uf').value="...";
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=callback';

            //Não esqueça de passar a sua função como parametro

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);
        }
        else{

            reset_formulario()
            alert("Verifique o cep informado")
        }
    }
    else{
        reset_formulario()
    }
}