import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from './categories/categories.module.js';
import { WorkshopsModule } from './workshops/workshops.module.js';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),
    // MongooseModule.forRoot('mongodb://127.0.0.1:27017/workshop-hub'),
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      useFactory:async (configService:ConfigService)=>({
        uri:configService.get<string>("MONGODB_URI")
      }),
      inject:[ConfigService]
    }),
    CategoriesModule,
    WorkshopsModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
