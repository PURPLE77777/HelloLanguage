import { Injectable, Logger, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
	private readonly logger = new Logger('Request')

	use(req: Request, res: Response, next: NextFunction) {
		const reqTime = new Date().getTime()
		const { method, url, body } = req
		const bodyString = Object.keys(body).length ? JSON.stringify(body) : ''

		res.on('finish', () => {
			const resTime = new Date().getTime()
			const { statusCode } = res

			// if (statusCode >= 400 && statusCode < 500) {
			// 	this.logger.log(
			// 		`${method} ${url} ${statusCode} - ${resTime - reqTime} ms`
			// 	)
			// }

			this.logger.log(
				`${method} ${url} ${bodyString} - ${statusCode} ${resTime - reqTime} ms`
			)
		})

		next()
	}
}
