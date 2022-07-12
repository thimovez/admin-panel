import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {ValidationPipe} from "./pipes/validation.pipe";


async function start(): Promise<void> {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)


    app.useGlobalPipes(new ValidationPipe())

    await app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
}

start()
    .then();