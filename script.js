
async function fetchCep() {
    let cep = document.getElementById('cep').value
    const url = "https://viacep.com.br/ws/"+cep+"/json/"

    const response = await fetch(url);
    const data = await response.json();
    return data;

  }

    // async function listarCep(){
    //     const lista = await fetchCep();
    //     console.log(lista)
    //     document.getElementById('logradouro').value =lista.logradouro
    //     document.getElementById('bairro').value =lista.bairro
    //     document.getElementById('localidade').value =lista.localidade 
    //     document.getElementById('uf').value =lista.uf
        
    // }

    async function listarCep(){
        if (document.getElementById('cep').value.length > 7){
            const lista = await fetchCep();
            console.log(lista.erro)
            if(typeof(lista) === 'object' && lista.erro != "true"){
                // const lista = await fetchCep();
                console.log(lista)
                document.getElementById('logradouro').value =lista.logradouro
                document.getElementById('bairro').value =lista.bairro
                document.getElementById('localidade').value =lista.localidade 
                document.getElementById('uf').value =lista.uf
            }
            if(lista.erro == "true"){
                document.getElementById('cep-error').innerHTML = "Digite um Cep Válido!"
            }
        }
        else{
            document.getElementById('cep-error').innerHTML = ""
        }
    };
    


    
function busca(){
    listarCep()
    // console.log(document.getElementById('cep').value.length);
    // document.getElementById('cep-error').innerHTML = "Digite um Cep Válido!"
    
}


    