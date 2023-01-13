import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createUser(@Body() body: any): Promise<any> {
    return this.appService.createUser(body);
  }

  @Get()
  getUsers(): Promise<any> {
    return this.appService.getUsers();
  }
}
