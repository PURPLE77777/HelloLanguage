import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UsersRepository } from './users.repository'

@Injectable()
export class UsersService {
	constructor(private readonly userRepository: UsersRepository) {}

	async create(createUserDto: CreateUserDto) {
		const existUser = await this.findUnique({
			first_name: createUserDto.first_name,
			last_name: createUserDto.last_name,
			email: createUserDto.email,
		})

		if (existUser) {
			throw new BadRequestException('Such user already exist')
		}

		return await this.userRepository.create({
			...createUserDto,
			birthday: new Date(createUserDto.birthday),
		})
	}

	findUnique(where: Prisma.UserWhereUniqueInput) {
		return this.userRepository.findUnique(where)
	}

	async findOne(id: string) {
		const user = await this.findUnique({ id })

		if (!user) {
			throw new NotFoundException("Such user doesn't exist")
		}

		return user
	}

	async update(id: string, updateUserDto: UpdateUserDto) {
		const user = await this.findUnique({ id })

		if (!user) {
			throw new NotFoundException("Such user doesn't exist")
		}

		return await this.userRepository.update({ id }, updateUserDto)
	}

	async remove(id: string) {
		const user = await this.findUnique({ id })

		if (!user) {
			throw new NotFoundException("Such user doesn't exist")
		}

		return await this.userRepository.remove({ id: user.id })
	}
}
