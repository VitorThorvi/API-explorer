const AppError = require('../utils/AppError')
const sqliteConnection = require('../database/sqlite')

class UsersController {
    /*
    * um controller não deve ter mais do que 5 métodos. Se houver a necessidade de
    * mais do que 5 métodos, vale a pena criar um novo controller para separar as
    * responsabilidades.
    *
    * index - GET para listar vários registros.
    * show - GET para exibir um registro específico.
    * create - POST para criar um registro
    * update - PUT para atualizar um registro.
    * delete - DELETE para remover um registro.
    * */
    async create(request, response) {
       const {name, email, password} = request.body;

       const database = await sqliteConnection();
       // const checkUserExists = await database.get("SELECT * FROM users WHERE email = 'email@email.com'");
       const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

       if(checkUserExists) {
           throw new AppError("Este e-mail já está em uso.");
       }

        await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, password])

        return response.status(201).json()
    }

}

module.exports = UsersController
