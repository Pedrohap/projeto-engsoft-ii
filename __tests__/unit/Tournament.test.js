const Tournament = require ("../../models/Tournament");

describe('Torneio',() =>{
    it('deve ser criado corretamente', ()=>{
        let tournament = new Tournament(1, 'Torneio de Verão', '2023-07-15', '14:00', 1, [2, 4], "Rua do Cão", ['Mortal Kombat 1']);

        expect(tournament.id).toBe(1);
        expect(tournament.nome).toBe('Torneio de Verão');
        expect(tournament.data).toBe('2023-07-15');
        expect(tournament.hora).toBe('14:00');
        expect(tournament.organizador).toBe(1);
        expect(tournament.participantes).toEqual([2, 4]);
        expect(tournament.endereco).toBe('Rua do Cão');
        expect(tournament.jogos).toEqual(['Mortal Kombat 1']); 
    });

    it('deve ser possivel adicionar um participante', ()=>{
        let tournament = new Tournament(1, 'Torneio de Verão', '2023-07-15', '14:00', 1, [2, 4], "Rua do Cão", ['Mortal Kombat 1']);
        tournament.addParticipante(3)

        expect(tournament.participantes).toEqual([2, 4, 3]);
    })

    it('deve ser possivel remover um participante', ()=>{
        let tournament = new Tournament(1, 'Torneio de Verão', '2023-07-15', '14:00', 1, [2, 4], "Rua do Cão", ['Mortal Kombat 1']);
        tournament.removeParticipante(2)

        expect(tournament.participantes).toEqual([4]);
    })
})