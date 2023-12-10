class Tournament{
    constructor(id, nome,data,hora,organizador,participantes,endereco,jogos){
        this._id = id;
        this._nome = nome;
        this._data = data;
        this._hora = hora;
        this._organizador = organizador;
        this._participantes = participantes;
        this._endereco = endereco;
        this._jogos = jogos;
    }

    // Getter e Setter para 'id'
    get id() {
        return this._id;
    }

    set id(novaId) {
        this._id = novaId;
    }
    
    // Getter e Setter para 'nome'
    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    // Getter e Setter para 'data'
    get data() {
        return this._data;
    }

    set data(novaData) {
        this._data = novaData;
    }

    // Getter e Setter para 'hora'
    get hora() {
        return this._hora;
    }

    set hora(novaHora) {
        this._hora = novaHora;
    }

    // Getter e Setter para 'organizador'
    get organizador() {
        return this._organizador;
    }

    set organizador(novoOrganizador) {
        this._organizador = novoOrganizador;
    }

    // Getter e Setter para 'participantes'
    get participantes() {
        return this._participantes;
    }

    set participantes(novosParticipantes) {
        this._participantes = novosParticipantes;
    }

    //Adicionar participantes
    addParticipante(participante) {
        this._participantes.push(participante);
    }

    //Remover Participante
    removeParticipante(participante) {
        let indexParticipanete = this._participantes.indexOf(participante)
        if(indexParticipanete !== -1){
            this._participantes.splice(indexParticipanete)
        } else {
            console.log("Pariticipante não faz parte do torneio")
        }
    }

    // Getter e Setter para 'endereco'
    get endereco() {
        return this._endereco;
    }

    set endereco(novoEndereco) {
        this._endereco = novoEndereco;
    }

    // Getter e Setter para 'jogos'
    get jogos() {
        return this._jogos;
    }

    set jogos(novosJogos) {
        this._jogos = novosJogos;
    }
}
module.exports = Tournament;