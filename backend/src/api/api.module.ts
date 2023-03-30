import {Module} from '@nestjs/common';
import {RouterModule, Routes} from '@nestjs/core';
import {AuthControllerModule} from './auth/authController.module';
import {ConversationControllerModule} from './conversation/conversation.module';

const routes: Routes = [
    {
        path: '/',
        module: AuthControllerModule,
    },
    {
        path: '/conversations',
        module: ConversationControllerModule,
    },
];

@Module({
    imports: [RouterModule.register(routes), AuthControllerModule, ConversationControllerModule],
})
export class ApiModule {}
