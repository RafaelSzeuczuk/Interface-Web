import Endereco from "./Endereco";
import Telefone from "./Telefone";

export default class Cliente {
    private _nome: string;
    private _cpf: string;
    private _data_nascimento: string;
    private _sexo: string;
    private _endereco: Endereco;
    private _telefones: Telefone[];

    constructor(
        nome: string,
        cpf: string,
        data_nascimento: string,
        sexo: string,
        endereco: Endereco,
        telefones: Telefone[]
    ) {
        this._nome = nome;
        this._cpf = cpf;
        this._data_nascimento = data_nascimento;
        this._sexo = sexo;
        this._endereco = endereco;
        this._telefones = telefones;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(cpf: string) {
        this._cpf = cpf;
    }

    get data_nascimento(): string {
        return this._data_nascimento;
    }

    set data_nascimento(data_nascimento: string) {
        this._data_nascimento = data_nascimento;
    }

    get sexo(): string {
        return this._sexo;
    }

    set sexo(sexo: string) {
        this._sexo = sexo;
    }

    get endereco(): Endereco {
        return this._endereco;
    }

    set endereco(endereco: Endereco) {
        this._endereco = endereco;
    }

    get telefones(): Telefone[] {
        return this._telefones;
    }

    set telefones(telefones: Telefone[]) {
        this._telefones = telefones;
    }
}
