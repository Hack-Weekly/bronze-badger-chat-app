import {Module} from '@nestjs/common';
import {RouterModule, Routes} from '@nestjs/core';
import {AuthControllerModule} from './auth/authController.module';
import {ConversationModule} from './conversation/conversation.module';

const routes: Routes = [
    {
        path: '/',
        module: AuthControllerModule,
    },
    {
        path: '/conversations',
        module: ConversationModule,
    },
];

@Module({
    imports: [RouterModule.register(routes), AuthControllerModule, ConversationModule],
})
export class ApiModule {}
