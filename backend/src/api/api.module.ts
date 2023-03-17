import {Module} from '@nestjs/common';
import {RouterModule, Routes} from '@nestjs/core';
import {AuthModule} from './auth/auth.module';

const routes: Routes = [
    {
        path: '/auth',
        module: AuthModule,
    },
];

@Module({
    imports: [RouterModule.register(routes)],
})
export class ApiModule {}
