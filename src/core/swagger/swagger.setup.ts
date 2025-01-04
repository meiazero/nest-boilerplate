import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { apiReference } from "@scalar/nestjs-api-reference";

export function setupSwagger(app: INestApplication): void {
  /**
   * Configure Swagger documentation
   * https://docs.nestjs.com/openapi/introduction
   *
   */
  const config = new DocumentBuilder()
    .setTitle("Nest API Boilerplate")
    .setDescription("")
    .setVersion("0.0.1")
    .addBearerAuth();

  const documentFactory = () =>
    SwaggerModule.createDocument(app, config.build());

  // Define Swagger documentation endpoint
  if (process.env.NODE_ENV === "development") {
    SwaggerModule.setup("docs", app, documentFactory, {
      swaggerUiEnabled: false,
      jsonDocumentUrl: "docs/openapi.json",
    });

    app.use(
      "/reference",
      apiReference({
        theme: "purple",
        spec: {
          url: "docs/openapi.json",
        },
      }),
    );
  }
}
