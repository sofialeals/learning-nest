import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    findAll(){
        return "Find all messages"
    }

    @Get(":id")
    findOne(@Param("id") messageId: number){
        console.log(`Message ID: ${messageId}`)
        return "Find one message"
    }

    @Post()
    create() {
        return 'Message created'
    }
}
