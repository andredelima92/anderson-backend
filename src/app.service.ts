import { BadGatewayException, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: any): Promise<any> {
    if (data.age < 18) {
      throw new BadGatewayException('Não é possivel gravar menor de idade');
    }

    return await this.prisma.user.create({
      data,
    });
  }

  async getUsers(): Promise<any> {
    return await this.prisma.user.findMany();
  }
}
