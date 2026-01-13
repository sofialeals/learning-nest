import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from 'src/messages/messages.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: '',
      host: '',
      port: ,
      username: '',
      database: '',
      password: '',
      /*
      autoLoadEntities: carrega entidades automaticamente,
      sem necessidade de especificá-las unicamente
      */ 
      autoLoadEntities: true,
      /*
      synchronize: sincroniza as entidades com as tabelas
      do banco de dados. NÃO DEVE SER USADO EM PRODUÇÃO, pois
      pode provocar perda de dados
      */ 
      synchronize: true
    }),
    MessagesModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
  // exports: []
})
export class AppModule {}
