class Game{
    constructor(id,nome,genero,thumbnail,faixa_etaria){
        this._id = id;
        this._nome = nome;
        this._genero = genero;
        this._thumbnail = thumbnail;
        this._faixa_etaria = faixa_etaria;
    }

    // Getter e Setter para 'id'
    get id() {
        return this._id;
    }

    set id(novoId) {
        this._id = novoId;
    }

    // Getter e Setter para 'nome'
    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    // Getter e Setter para 'genero'
    get genero() {
        return this._genero;
    }

    set genero(novoGenero) {
        this._genero = novoGenero;
    }

    // Getter e Setter para 'thumbnail'
    get thumbnail() {
        return this._thumbnail;
    }

    set thumbnail(novaThumbnail) {
        this._thumbnail = novaThumbnail;
    }

    // Getter e Setter para 'faixa_etaria'
    get faixa_etaria() {
        return this._faixa_etaria;
    }

    set faixa_etaria(novaFaixaEtaria) {
        this._faixa_etaria = novaFaixaEtaria;
    }
}

module.exports = Game;