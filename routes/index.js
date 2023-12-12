var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');
var TournamentController = require('../controllers/TournamentController')
var GameController = require("../controllers/GameController")

const userController = new UserController(); // Crie uma instância do UserController
const tournamentController = new TournamentController();
const gameController = new GameController();

var logedUser = null;
const appTitle = "IFFC Manager"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: appTitle, logedUser: logedUser });
});

//Login User routes
router.get ('/singIn', function(req,res) {
  res.render('login', {title: appTitle + ': Entrar', logedUser: logedUser});
});

router.post('/singIn', function(req,res){
  logedUser = userController.singInUser(req,res)
  res.redirect('/')
});

//Sing Out User
router.get('/singOut', function(req,res){
  if (logedUser!== null){
    logedUser = null
    res.redirect('/')
  }
})

//Update User routes
router.get ('/updateUser',function(req,res) {
  if (logedUser!== null){
    res.render('updateUser',{title: appTitle + ': Atualizar Dados', logedUser: logedUser})
  } else {
    error = {status: 400, stack: 404}
    res.render('error', {message: "É necessário estar logado para essar está pagina", error:error})
  }
})

router.post ('/updateUser',function(req,res) {
  if (logedUser!== null){
    userController.updateUser(req,res,logedUser._id)
    res.render('updateUser',{title: appTitle + ': Atualizar Dados', logedUser: logedUser, status: 1})
  } else {
    error = {status: 400, stack: 404}
    res.render('error', {message: "É necessário estar logado para essar está pagina", error:error})
  }
})

//Tournament Routes

//Get Tournaments Page
router.get ('/tournaments',function(req,res) {
  res.render('tournaments',{title: appTitle + ': Torneios', logedUser: logedUser, tournaments: tournamentController._tournamentsBD})
})

router.get ('/tournaments/:tournamentId/info',function(req,res) {
  let tournament = tournamentController.getATournament(req,res)
  res.render('tournamentInfo',{title: appTitle + ': Torneios', logedUser: logedUser, tournament: tournament, games: gameController._gamesBD, users: userController._userBD})
})

//Create a Tournament Form
router.get ('/tournaments/create',function(req,res) {
  if (logedUser !== null && logedUser._tipo_de_acesso === "organizador"){
    res.render('createTournament',{title: appTitle + ': Criar Torneio', logedUser: logedUser, tournaments: tournamentController._tournamentsBD, games: gameController._gamesBD})
  } else {
    res.render('error', {message: "É necessário estar logado como organizador para relizar está ação", error:error})
  }
})

router.post ('/tournaments/create',function(req,res) {
  if (logedUser !== null && logedUser._tipo_de_acesso === "organizador"){
    tournamentController.createTournament(req,res,logedUser._id)
    res.render('createTournament',{title: appTitle + ': Criar Torneio', logedUser: logedUser, tournaments: tournamentController._tournamentsBD, games: gameController._gamesBD, status:1})
  } else {
    res.render('error', {message: "É necessário estar logado como organizador para relizar está ação", error:error})
  }
})

//Enroll a user into a Tournament
router.get ('/tournaments/:tournamentId/enroll',function(req,res) {
  if (logedUser !== null){
    tournamentController.enrollTournament(req,res,logedUser._id)
    res.render('tournaments',{title: appTitle + ': Torneios', logedUser: logedUser, tournaments: tournamentController._tournamentsBD, status: 1})
  } else {
    error = {status: 400, stack: 404}
    res.render('error', {message: "É necessário estar logado para relizar está ação", error:error})
  }
})

router.get ('/tournaments/:tournamentId/dropOut',function(req,res) {
  if (logedUser!== null){
    tournamentController.dropOutTournament(req,res,logedUser._id)
    res.render('tournaments',{title: appTitle + ': Torneios', logedUser: logedUser, tournaments: tournamentController._tournamentsBD, status: 2})
  } else {
    error = {status: 400, stack: 404}
    res.render('error', {message: "É necessário estar logado para relizar está ação", error:error})
  }
})

router.get ('/tournaments/:tournamentId/:userId/dropOut',function(req,res) {
  let idTorneio = req.params.tournamentId
  let userId = parseInt(req.params.userId)
  let indexTorneio = tournamentController._tournamentsBD.findIndex(tournament => tournament.id === parseInt(idTorneio));
  if (logedUser!== null && tournamentController._tournamentsBD[indexTorneio]._organizador === logedUser._id){
    tournamentController.dropOutTournament(req,res,userId)
    res.redirect('/tournaments/'+ idTorneio +'/info')
  } else {
    error = {status: 400, stack: 404}
    res.render('error', {message: "É necessário estar logado como organizador deste torneio para relizar está ação", error:error})
  }
})

module.exports = router;
