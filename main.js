class pessoa{
    construtor(nome,altura,peso){
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }
}

class Vingador extends pessoa{
    constructor(nome, altura, peso, poderes, temArmadura, isMembroFundador){
        super(nome,altura,peso);
        this.nome = nome;
        this.poderes = poderes;
        this.temArmadura = temArmadura;
        this.isMembroFundador = isMembroFundador;

        alert(nome);
    }

    lutar(){
        alert(`${this.nome} está lutando usando sua armadura`);
    }
}

const ironman = new Vingador('Tony Stark',"1.75","100kg","Não tem",true,true);

document.getElementById("lutar").onclick = function(){
    thor.lutar();
};

class OperacoesMatematicas {
    static soma(a,b){
        return a + b;
    }

}

const sum = OperacoesMatematicas.soma(1,3);

alert(sum);