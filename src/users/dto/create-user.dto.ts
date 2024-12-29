import { Prisma } from '@prisma/client'
import {
	IsDateString,
	IsEmail,
	IsOptional,
	IsString,
	MinLength,
} from 'class-validator'

export class CreateUserDto implements Prisma.UserCreateInput {
	@IsString()
	@MinLength(2)
	first_name: string

	@IsOptional()
	@IsString()
	@MinLength(2)
	middle_name?: string | null | undefined

	@IsString()
	@MinLength(2)
	last_name: string

	@IsOptional()
	@IsDateString()
	birthday: string | Date

	@IsEmail()
	email: string

	@IsString()
	@MinLength(8)
	password: string
}
