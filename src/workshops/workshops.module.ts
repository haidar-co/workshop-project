import { Module } from '@nestjs/common';
import { WorkshopsService } from './workshops.service.js';
import { WorkshopsController } from './workshops.controller.js';

@Module({
  controllers: [WorkshopsController],
  providers: [WorkshopsService],
})
export class WorkshopsModule {}
