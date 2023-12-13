const { Builder, By, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


describe('Login', ()=>{
    it('deve permitir que o usuário realize o login e possa editar seu perfil', async ()=>{
        // Configurar o navegador
        // Configurar opções do navegador (definindo o tamanho da janela)
        const chromeOptions = new chrome.Options();
        chromeOptions.addArguments('--window-size=1200,800'); // Altere os valores conforme necessário

        // Configurar o navegador
        let driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(chromeOptions)
            .build();
        
        // Acessa a aplicação
        await driver.get('http://localhost:3000');  

        //user1@example.com', 'João Silva'
        await driver.findElement(By.id('singInLink')).click();
        await driver.findElement(By.id('useremail')).sendKeys('user1@example.com');
        await driver.findElement(By.id('password')).sendKeys('super123');
        await driver.findElement(By.id('singInButton')).click();

        await driver.findElement(By.id('updateUserLink')).click();

        await driver.findElement(By.id('username')).clear();  
        await driver.findElement(By.id('nickname')).clear();
        await driver.findElement(By.id('useremail')).clear();
        await driver.findElement(By.id('address')).clear();    

        await driver.findElement(By.id('username')).sendKeys('Clebin das Couve');
        await driver.findElement(By.id('nickname')).sendKeys('superClebin');
        await driver.findElement(By.id('useremail')).sendKeys('clebin@supremo.com');
        await driver.findElement(By.id('address')).sendKeys('Rua dos mestres Cleberlandia');
        await driver.findElement(By.id('updateUserButton')).click();


        // Captura os dados que estão sendo exibidos na tela
        let novoUserName = await driver.findElement(By.id('username')).getAttribute('value');
        let novoNickname = await driver.findElement(By.id('nickname')).getAttribute('value');
        let novoEmail = await driver.findElement(By.id('useremail')).getAttribute('value');
        let novoAddress = await driver.findElement(By.id('address')).getAttribute('value');


        // Realiza a comparação
        expect(await novoUserName).toEqual('Clebin das Couve');
        expect(await novoNickname).toEqual('superClebin');
        expect(await novoEmail).toEqual('clebin@supremo.com');
        expect(await novoAddress).toEqual('Rua dos mestres Cleberlandia');

    }, 10000); // 10000 ms (10 segundos) de timeout

});