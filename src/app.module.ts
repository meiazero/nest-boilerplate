import { ConfigSetupModule } from "./config/configure.module";
import { CoreModule } from "./core/core.module";

import { Module, ValidationPipe } from "@nestjs/common";
import { APP_GUARD, APP_PIPE } from "@nestjs/core";
import { JwtAuthGuard } from "./common/guards/jwt-auth.guard";
import { JwtAuthStrategy } from "./modules/auth/jwt/jwt-auth.strategy";
import { UserController } from "./modules/user/user.controller";
import { UserModule } from "./modules/user/user.module";

@Module({
  imports: [ConfigSetupModule, CoreModule, UserModule],
  controllers: [UserController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    JwtAuthStrategy,
  ],
})
export class AppModule {}
