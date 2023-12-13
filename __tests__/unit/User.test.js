const User = require ("../../models/User");


describe('Usuário',() =>{
    it('deve ser criado corretamente', ()=>{
        let user = new User(1, 'zezinho@gmail.com', 'Zezinho da Silva', 'zezinho29','123456','organizador', '1997-03-28','Rua Samada, 74')

        expect(user.id).toBe(1);
        expect(user.email).toBe('zezinho@gmail.com');
        expect(user.nome).toBe('Zezinho da Silva');
        expect(user.apelido).toBe('zezinho29');
        expect(user.senha).toBe('123456');
        expect(user.tipo_de_acesso).toBe('organizador');
        expect(user.endereco).toBe('Rua Samada, 74');
    });
})