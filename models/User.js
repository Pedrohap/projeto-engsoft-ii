class User{
    constructor(id ,nome, apelido, senha, tipo_de_acesso,data_de_nascimento, endereco){
        this._id = id;
        this._email = email;
        this._nome = nome;
        this._apelido = apelido;
        this._senha = senha;
        this._tipo_de_acesso = tipo_de_acesso;
        this._data_de_nascimento = data_de_nascimento;
        this._endereco = endereco;
    }

    // Getter e Setter para 'id'
    get id() {
        return this._id;
    }

    set id(novaId) {
        this._id = novaId;
    }

    // Getter e Setter para 'email'
    get email() {
        return this._email;
    }

    set email(novoEmail) {
        this._email = novoEmail;
    }

    // Getter e Setter para 'nome'
    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    // Getter e Setter para 'apelido'
    get apelido() {
        return this._apelido;
    }

    set apelido(novoApelido) {
        this._apelido = novoApelido;
    }

    // Getter e Setter para 'senha'
    get senha() {
        return this._senha;
    }

    set senha(novaSenha) {
        this._senha = novaSenha;
    }

    // Getter e Setter para 'tipo_de_acesso'
    get tipo_de_acesso() {
        return this._tipo_de_acesso;
    }

    set tipo_de_acesso(novoTipoDeAcesso) {
        this._tipo_de_acesso = novoTipoDeAcesso;
    }

    // Getter e Setter para 'data_de_nascimento'
    get data_de_nascimento() {
        return this._data_de_nascimento;
    }

    set data_de_nascimento(novaDataDeNascimento) {
        this._data_de_nascimento = novaDataDeNascimento;
    }

    // Getter e Setter para 'endereco'
    get endereco() {
        return this._endereco;
    }

    set endereco(novoEndereco) {
        this._endereco = novoEndereco;
    }
}
}