import {INestApplication, Logger} from '@nestjs/common';
import * as morgan from 'morgan';

export function useRequestLogging(app: INestApplication): void {
    const logger = new Logger('Request');
    app.use(
        morgan('tiny', {
            stream: {
                write: (message) => logger.debug(message.replace('\n', '')),
            },
        })
    );
}
