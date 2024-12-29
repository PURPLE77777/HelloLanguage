import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DictionariesModule } from './dictionaries/dictionaries.module'
import { GroupsModule } from './groups/groups.module'
import { LanguagesModule } from './languages/languages.module'
import { LoggerMiddleware } from './middlewares/logger.middleware'
import { OrganizationsModule } from './organizations/organizations.module'
import { PrismaModule } from './prisma/prisma.module'
import { ProfilesModule } from './profiles/profiles.module'
import { TasksModule } from './tasks/tasks.module'
import { UsersModule } from './users/users.module'
import { WordsModule } from './words/words.module'

@Module({
	imports: [
		UsersModule,
		ProfilesModule,
		OrganizationsModule,
		GroupsModule,
		DictionariesModule,
		WordsModule,
		TasksModule,
		LanguagesModule,
		PrismaModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes({
			path: '*',
			method: RequestMethod.ALL,
		})
	}
}
