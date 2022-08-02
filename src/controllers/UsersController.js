const AppError = require("../utils/AppError");

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
    create(request, response) {
        const {name, email, password} = request.body;

        if(!name){
            throw new AppError("O nome é obrigatório.");
        }

        response.status(201).json({name, email, password});
    }
}

module.exports = UsersController;
