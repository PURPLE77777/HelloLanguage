import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateUserDto } from './dto/create-user.dto'
import { IUserRepositoryMethods } from './types/users.interface'

@Injectable()
export class UsersRepository implements IUserRepositoryMethods {
	constructor(private readonly prisma: PrismaService) {}

	create(data: CreateUserDto): Promise<Prisma.UserCreateInput> {
		return this.prisma.user.create({ data })
	}

	findUnique = (
		where: Prisma.UserWhereUniqueInput
	): Promise<Prisma.UserCreateInput | null> => {
		return this.prisma.user.findUnique({ where })
	}

	update = (
		where: Prisma.UserWhereUniqueInput,
		data: Prisma.UserUpdateInput
	): Promise<Prisma.UserCreateInput> => {
		return this.prisma.user.update({ where, data })
	}

	remove = (
		where: Prisma.UserWhereUniqueInput
	): Promise<Prisma.UserCreateInput> => {
		return this.prisma.user.delete({ where })
	}
}
