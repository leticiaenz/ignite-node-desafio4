import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // verificar se o usuário daquele id exist e se ele admin

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
