const GameController = require ("../../controllers/GameController");
const Game = require('../../models/Game');
const axios = require('axios')
const MockAdapter = require ('axios-mock-adapter')

const mock = new MockAdapter(axios);

describe('GET jogo/:idJogo', ()=>{
    it('deve retornar os dados do jogo com base no ID', async ()=>{
        const idJogo = 1;
        const jogoSimulado = new Game(1,"Super Smash Bros Ultimate","Luta","/images/gameThumbnails/###","L")

        mock.onGet(`http://localhost:3000/jogo/${idJogo}`).reply(200, {
            jogo: jogoSimulado,
        });

        // Chame a função que usa o axios para fazer a solicitação
        const gameController = new GameController();
        const resultado = await gameController.APIgetGame(idJogo);

        // Verifique se a função retornou os dados simulados
        expect(resultado).toEqual(jogoSimulado);
    });

    it('deve retornar undefined ao informar um id de jogo inválido', async ()=>{
        const idJogo = 8;
        const jogoSimulado = 'undefined';

        mock.onGet(`http://localhost:3000/jogo/${idJogo}`).reply(200, {
            jogo: jogoSimulado,
        });

        // Chame a função que usa o axios para fazer a solicitação
        const gameController = new GameController();
        const resultado = await gameController.APIgetGame(idJogo);

        // Verifique se a função retornou os dados simulados
        expect(resultado).toEqual(jogoSimulado);
    });

    // Limpe o mock após cada teste
    afterEach(() => {
        mock.reset();
    });    
})
