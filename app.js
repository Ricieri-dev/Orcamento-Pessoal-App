class Despesa {
    constructor(ano,mes,dia,tipo,descricao,valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i] == '' || this[i] == null ){
                return false
            }
        }
        return true
    }
}

class Bd{
    constructor(){
        let id = localStorage.getItem('id')

        if (id === null){
            localStorage.setItem('id',0);
        }
    }
    getProximoId(){
        let proximoId = localStorage.getItem('id');
        return Number(proximoId)+1
    }

    gravar(d){
        let id = this.getProximoId()

        localStorage.setItem(id.toString(), JSON.stringify(d))
        localStorage.setItem('id', id.toString())
    }   
}

let bd = new Bd()


function cadastrarDespesa(){
    let ano = document.getElementById('ano');
    let mes = document.getElementById('mes');
    let dia = document.getElementById('dia');
    let tipo = document.getElementById('tipo');
    let descricao = document.getElementById('descricao');
    let valor = document.getElementById('valor');


    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
        
    );
    if (despesa.validarDados()){
        bd.gravar(despesa)
        document.getElementById('modalHeader').classList.add('text-success')

        document.getElementById('exampleModalLabel').innerHTML = "Registro inserido com sucesso !"
        document.getElementById('exampleModalLabel').className.toggle('text-success')

        let modalBody = document.getElementById('modalBody').innerHTML = "Despesa cadastrada com sucesso !"
        
        $('#modalRegistraDespesa').modal('show')

    }else{
        let header = document.getElementById('modalHeader')
        header.classList.toggle('text-danger')

        let modalTitle = document.getElementById('exampleModalLabel').innerHTML = "Erro !"

        let modalBody = document.getElementById('modalBody').innerHTML = "Há campos a serem preenchidos !"

        $('#modalRegistraDespesa').modal('show')
    }
    


}

