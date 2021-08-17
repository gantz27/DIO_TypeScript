// types >>> usado para fazer junções / merges entre interfaces

// interfaces >>> usado para definir contrato de estruturas de dados/classes

/* Generic types

function adicionaApendiceALista<T>(array: T[], valor: T) {
    return array.map(() =>  valor);
}

adicionaApendiceALista([1, 2, 3], 5)
*/


/*
interface IUsuario {
    id: string
    email: string

}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
    if ('cargo' in usuario) {
        // redirecionar para a área de admin
    }

    // redirecionar para a área do usuário comum
}*/

/*
interface IUsuario {
    id: string
    email: string
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redirecione(usuario: IUsuario) {
    if (usuario.cargo) {
        // redirecionar(usuario.cargo)
    }

    // redirecionar para a área do usuário
}*/


/*
interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    readonly [K in keyof Cachorro]-?: Cachorro[K];
}

class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;
    parqueFavorito;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 14);
*/

import $ from 'jquery'

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova funcao');
    }
});

(<any>$('body')).novaFuncao();