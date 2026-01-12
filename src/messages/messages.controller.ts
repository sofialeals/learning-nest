import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDTO } from './dto/create-message.dto';
import { UpdateMessageDTO } from './dto/update-message.dto';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}
    // também é possível utilizar um enum de HttpStatus para retornar o código de status de uma resposta HTTP
    // ex.: @HttpCode(HttpStatus.OK)
    @HttpCode(200)
    @Get()
    findAll(@Query() pagination: any){
        console.log(pagination)
        return this.messagesService.findAll()
    }

    @Get(":id")
    findOne(@Param("id") messageId: string){
        return this.messagesService.findOne(messageId)
    }

    @Post()
    // é possível selecionar somente um dos atributos do objeto enviado no body
    // ex.: create(@Body('key') body: any)
    create(@Body() createMessageDTO: CreateMessageDTO) {
        return this.messagesService.create(createMessageDTO)
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateMessageDTO: UpdateMessageDTO){
        return this.messagesService.update(id, updateMessageDTO)
    }

    // @HttpCode(204)
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number){
        return this.messagesService.remove(id)
    }
}
