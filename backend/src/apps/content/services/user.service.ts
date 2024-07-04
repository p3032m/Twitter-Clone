import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from 'src/libs/repositories/user.repository';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
}
