const Tournament = require('../models/Tournament');

class TournamentController{
    constructor(){
        let tournament1 = new Tournament(1, 'Torneio de Verão', '2023-07-15', '14:00', 1, [2, 4], "Rua do Cão", ['Mortal Kombat 1']);
        let tournament2 = new Tournament(2, 'Campeonato de Inverno', '2023-12-01', '18:30', 2, [1, 3], "Avenida Joaquin", ['Jogo 3', 'Jogo 4']);
        let tournament3 = new Tournament(3, 'Copa Primavera', '2024-04-10', '16:00', 3, [2, 3, 4], "Downtown", ['Jogo 5', 'Jogo 6']);

        this._idCounter = 3;
        // Armazenando os torneios em um array chamado tournamentsBD
        this._tournamentsBD = [tournament1, tournament2, tournament3];
    }

    updateTournament(req,res){
        const tournamentId = parseInt(req.params.id); // Convertendo o ID da string para número
        const dadosAtualizados = req.body; // Supondo que os dados atualizados estão no corpo da requisição
    
        // Encontrando o índice do torneio no vetor
        const indexTorneio = this._tournamentsBD.findIndex(tournament => tournament.id === tournamentId);
    
        // Verificando se o torneio foi encontrado
        if (indexTorneio !== -1) {
            // Atualizando os dados do torneio
            Object.assign(this._tournamentsBD[indexTorneio], dadosAtualizados);
            res.json({ message: 'Torneio atualizado com sucesso', tournament: this._tournamentsBD[indexTorneio] });
            //Manda para a pagina de dados atualizada
        } else {
            res.status(404).json({ message: 'Torneio não encontrado' });
        }
    }

    createTournament(req,res,idOrganizador){
        let nomeTorneio = req.body.tournamentName;
        let dataTorneio = req.body.tournamentDate;
        let horaTorneio = req.body.tournamentTime;
        let enderecoTorneio = req.body.tournamentAddress;
        let jogosTorneio = req.body.tournamentGames;

        let newTournament = new Tournament(++this._idCounter, nomeTorneio, dataTorneio, horaTorneio, idOrganizador, [], enderecoTorneio, jogosTorneio);

        this._tournamentsBD.push(newTournament)
    }

    enrollTournament(req,res,idParticipante){
        let idTorneio = req.params.tournamentId
        // Encontrando o índice do torneio no vetor
        const indexTorneio = this._tournamentsBD.findIndex(tournament => tournament.id === parseInt(idTorneio));
        // Verificando se o torneio foi encontrado
        if (indexTorneio !== -1) {
            // Atualizando os dados do torneio
            if (this._tournamentsBD[indexTorneio]._participantes.includes(idParticipante)) {
                console.log(`O participante já faz parte do torneio.`);
            } else{
                this._tournamentsBD[indexTorneio].addParticipante(idParticipante);
                //Manda para a pagina de dados atualizada
        }
        } else {
            res.status(404).json({ message: 'Torneio não encontrado' });
        }
    }

    dropOutTournament(req,res,idParticipante){
        let idTorneio = req.params.tournamentId
        // Encontrando o índice do torneio no vetor
        const indexTorneio = this._tournamentsBD.findIndex(tournament => tournament.id === parseInt(idTorneio));
        // Verificando se o torneio foi encontrado
        if (indexTorneio !== -1) {
            this._tournamentsBD[indexTorneio].removeParticipante(idParticipante)
            //Manda para a pagina de dados atualizada
        } else {
            res.status(404).json({ message: 'Torneio não encontrado' });
        }
    }

    getATournament(req,res){
        let idTorneio = req.params.tournamentId
        const indexTorneio = this._tournamentsBD.findIndex(tournament => tournament.id === parseInt(idTorneio));
        if (indexTorneio !== -1) {
            return this._tournamentsBD[indexTorneio]
        } else {
            res.status(404).json({ message: 'Torneio não encontrado' });
        }
    }
}

module.exports=TournamentController