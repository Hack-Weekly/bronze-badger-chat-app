import {Module} from '@nestjs/common';
import {RouterModule, Routes} from '@nestjs/core';
import {AuthControllerModule} from './auth/authController.module';

const routes: Routes = [
    {
        path: '/',
        module: AuthControllerModule,
    },
];

@Module({
    imports: [RouterModule.register(routes), AuthControllerModule],
})
export class ApiModule {}
