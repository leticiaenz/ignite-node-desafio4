import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userAlreadyExistis = this.usersRepository.findByName(name);

    if (userAlreadyExistis) {
      throw new Error("User already exists");
    }
    this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
