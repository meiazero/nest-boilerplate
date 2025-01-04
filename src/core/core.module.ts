import { INestApplication, Module } from "@nestjs/common";
import { DrizzleModule } from "./database/drizzle/drizzle.module";
import { setupSwagger } from "./swagger/swagger.setup";

@Module({
  imports: [DrizzleModule],
  providers: [],
  exports: [],
})
export class CoreModule {
  static configureSwagger(app: INestApplication): void {
    setupSwagger(app);
  }
}
