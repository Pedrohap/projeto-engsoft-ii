const User = require("../models/User");

class UserController{

    constructor(){
        // Criando alguns usuários
        let user1 = new User(1, 'user1@example.com', 'João Silva', 'joao123', 'super123', 'organizador', '1990-01-01', 'Rua A, 123');
        let user2 = new User(2, 'user2@example.com', 'Maria Oliveira', 'maria456', 'super123', 'usuario', '1985-05-15', 'Av. B, 456');
        let user3 = new User(3, 'user3@example.com', 'Carlos Santos', 'carlos789', 'super123', 'usuario', '1995-09-30', 'Travessa C, 789');

        // Armazenando os usuários em um array chamado userBD
        this._userBD = [user1, user2, user3];
    }

    updateUser(req,res){
        const userId = parseInt(req.params.id); // Convertendo o ID da string para número
        const dadosAtualizados = req.body; // Supondo que os dados atualizados estão no corpo da requisição
    
        // Encontrando o índice do usuário no vetor
        const indexUsuario = this._userBD.findIndex(user => user.id === userId);
    
        // Verificando se o usuário foi encontrado
        if (indexUsuario !== -1) {
            // Atualizando os dados do usuário
            Object.assign(this._userBD[indexUsuario], dadosAtualizados);
            res.json({ message: 'Usuário atualizado com sucesso', usuario: this._userBD[indexUsuario] });
            //Manda para a pagina de dados atualizada
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    }
}