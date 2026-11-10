import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  @Get('health')
  getHealth(){
    return {
      status:'ok',
      timestamp:new Date().toDateString(),
    }
  };
  @Get('info')
  getInfo(){
    return {
      name:'wor`kshop hub api',
      version:'1.0.0',
      description:'api for workshop hub',
    }
  };

}
