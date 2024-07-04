import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from 'src/libs/repositories/user.repository';
import { AuthSignupDto } from '../dtos/auth.signup.dto';
import { User } from 'src/libs/schemas/user.schema';
import { EncryptionService } from 'src/libs/encryption/encryption.service';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersRepository: UserRepository,
    private jwtService: JwtService,
    private encryptionService: EncryptionService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    let user = await this.usersRepository.findByEmail(email);
    if(!user ) user=await this.usersRepository.findByName(email);
    if (
      user &&
      (await this.encryptionService.comparePasswords(password, user.password))
    ) {
      return user;
    }
    return null;
  }

  async login(
    email: string,
    password: string,
  ): Promise<{ userId: string; accessToken: string , userName: string}> {
    const user = await this.validateUser(email, password);
    console.log(user);
    if (user) {
      email = user.email;
      const payload: JwtPayload = { email };
      const accessToken = this.jwtService.sign(payload);
      return {
        userId: user._id.toString(),
        userName: user.name,
        accessToken,
      };
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }

  async signUp(userDto: AuthSignupDto): Promise<User> {
    const { email, password, name } = userDto;

    const EmailExist = await this.usersRepository.findByEmail(email);
    if (EmailExist) {
      throw new ConflictException('Email already exists');
    }
    
    const userExists = await this.usersRepository.findByName(name);
    if (userExists) {
      throw new ConflictException('Username already exists');
    }

    const hashedPassword = await this.encryptionService.hashPassword(password);
    const userToCreate: Partial<User> = {
      ...userDto,
      password: hashedPassword,
    };

    try {
      return this.usersRepository.create(userToCreate);
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
}
