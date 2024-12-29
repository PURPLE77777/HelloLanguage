import { Prisma } from '@prisma/client'
import { CreateUserDto } from '../dto/create-user.dto'

export interface IUserRepositoryMethods {
	create(data: CreateUserDto): Promise<Prisma.UserCreateInput>

	update(
		where: Prisma.UserWhereUniqueInput,
		data: Prisma.UserUpdateInput
	): Promise<Prisma.UserCreateInput>

	remove(where: Prisma.UserWhereUniqueInput): Promise<Prisma.UserCreateInput>

	findUnique(
		where: Prisma.UserWhereUniqueInput
	): Promise<Prisma.UserCreateInput | null>
}
