import { Prisma } from '@prisma/client'

export class User implements Prisma.UserCreateInput {
	id?: string | undefined
	first_name: string
	middle_name?: string | null | undefined
	last_name: string
	birthday: string | Date
	email: string
	password: string
	created_at?: string | Date | undefined
	updated_at?: string | Date | undefined
	profiles?: Prisma.ProfileCreateNestedManyWithoutUserInput | undefined
}
