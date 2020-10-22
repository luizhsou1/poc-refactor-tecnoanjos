# Registrar Técnico

## Fluxo básico

1. Recebe uma requisição do tipo **POST** na rota **/users/techinician**
2. Espera receber **name**, **email**, **password**, **passwordConfirmation**, **role**, **tag**, **isOnline**, sendo role um ENUM contendo ['EMPLOYEE', 'HOMEBASED', 'TECNO']
3. **Cria** um técnico no banco de dados
4. **Gera um JWT** para o técnico
5. Retorna **201** e o técnico e jwt criado

## Exceções

- Retorna erro **404** se a API não existir
- Retorna erro **400** se o body quebrar alguma restrição
- Retorna erro **409** se já existir um usuário com esse e-mail cadastrado
- Retorna erro **500** se acontecer algo não esperado na request

## Exemplo de uma requisição

POST .../users/techinician
{
	"name": "Luiz",
	"email": "luiz@mail.com",
	"password": "Abc@123",
	"passwordConfirmation": "Abc@123",
	"role": "EMPLOYEE",
	"tag": "123",
	"isOnline": true
}
