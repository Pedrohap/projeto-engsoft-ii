const User = require("../models/User");

class UserController{

    constructor(){
        // Criando alguns usuários
        let user1 = new User(1, 'user1@example.com', 'João Silva', 'joao123', 'super123', 'organizador', '1990-01-01', 'Rua A, 123');
        let user2 = new User(2, 'user2@example.com', 'Maria Oliveira', 'maria456', 'super123', 'usuario', '1985-05-15', 'Av. B, 456');
        let user3 = new User(3, 'user3@example.com', 'Carlos Santos', 'carlos789', 'super123', 'usuario', '1995-09-30', 'Travessa C, 789');
        let user4 = new User(4, 'zezinho@gmail.com', 'Zezinho da Silva', 'zezinho29','123456','organizador', '1997-03-28','Rua Samada, 74')
        // Armazenando os usuários em um array chamado userBD
        this._userBD = [user1, user2, user3, user4];
    }

    updateUser(req,res,userId){
        // Encontrando o índice do usuário no vetor
        const indexUsuario = this._userBD.findIndex(user => user.id === userId);

        let updtName = req.body.username;
        let updtNickname = req.body.nickname;
        let updtAddress = req.body.address;
        let updtEmail = req.body.useremail;
        // Verificando se o usuário foi encontrado
        if (indexUsuario !== -1) {
            // Atualizando os dados do usuário
            this._userBD[indexUsuario].nome = updtName;
            this._userBD[indexUsuario].endereco = updtAddress;
            this._userBD[indexUsuario].apelido = updtNickname;
            this._userBD[indexUsuario].email = updtEmail;
            //Manda para a pagina de dados atualizada
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    }

    singInUser(req,res){
        let username = req.body.useremail
        let password = req.body.password
      

        const indexUsuario = this._userBD.findIndex(user => user.email === username);
    
        // Verificando se o usuário foi encontrado
        if (indexUsuario !== -1) {
            if(this._userBD[indexUsuario].senha === password){
                return this._userBD[indexUsuario];
            }
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    }
}

module.exports = UserController