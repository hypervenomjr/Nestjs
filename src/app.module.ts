import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyController } from './property/property.controller';

@Module({
  imports: [],
  controllers: [AppController, PropertyController],
  providers: [AppService],
})
export class AppModule {}
