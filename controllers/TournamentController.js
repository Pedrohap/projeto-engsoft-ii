const Tournament = require('../models/Tournament');

class TournamentController{
    constructor(){
        let tournament1 = new Tournament(1, 'Torneio de Verão', '2023-07-15', '14:00', 'Associação Esportiva', [1, 2], 'Campo 1', ['Jogo 1', 'Jogo 2']);
        let tournament2 = new Tournament(2, 'Campeonato de Inverno', '2023-12-01', '18:30', 'Federação Esportiva', [1, 3], 'Estádio Principal', ['Jogo 3', 'Jogo 4']);
        let tournament3 = new Tournament(3, 'Copa Primavera', '2024-04-10', '16:00', 'Liga Desportiva', [2, 3], 'Arena Esportiva', ['Jogo 5', 'Jogo 6']);

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

    createTournament(req,res){
        const dadosTorneio = req.body;

        let newTournament = new Tournament(this._idCounter++, dadosTorneio.nome, dadosTorneio.data, dadosTorneio.hora, dadosTorneio.organizador, [], dadosTorneio.endereco, dadosTorneio.jogos);

        this._tournamentsBD.push(newTournament)
        res.json({ message: 'Torneio criado com sucesso', tournament: this._tournamentsBD[indexTorneio] });
    }

    enrollTournament(req,res){
        const idTorneio = req.body.idTorneio;
        const idParticipante = parseInt(req.body.idParticipante);

        // Encontrando o índice do torneio no vetor
        const indexTorneio = this._tournamentsBD.findIndex(tournament => tournament.id === idTorneio);
        // Verificando se o torneio foi encontrado
        if (indexTorneio !== -1) {
            // Atualizando os dados do torneio
            if (this._tournamentsBD[indexTorneio]._participantes.includes(idParticipante)) {
                console.log(`O participante já faz parte do tornei.`);
            } else{
                this._tournamentsBD[indexTorneio].addParticipante(idParticipante);
                res.json({ message: 'Usuario cadastrado como participante com sucesso', tournament: this._tournamentsBD[indexTorneio] });
                //Manda para a pagina de dados atualizada
        }
        } else {
            res.status(404).json({ message: 'Torneio não encontrado' });
        }
    }
}