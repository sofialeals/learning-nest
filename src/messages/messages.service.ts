import { HttpCode, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Message } from './entities/message.entity';
import { CreateMessageDTO } from './dto/create-message.dto';
import { UpdateMessageDTO } from './dto/update-message.dto';

@Injectable()
export class MessagesService {
    private lastId = 1
    private messages : Message[] = [
        {
            id: 1,
            text: "Test message",
            from: "Sofia",
            to: "Davi",
            read: true,
            date: new Date()
        }
    ]

    @HttpCode(HttpStatus.OK)
    findAll(){
        return this.messages
    }

    findOne(id: string){
        const message = this.messages.find(item => item.id === +id)

        if (message) return message

        throw new NotFoundException('Message not found')
    }

    create(createMessageDTO: CreateMessageDTO){
        this.lastId++
        const id = this.lastId
        const newMessage = {
            id,
            ...createMessageDTO,
            read: false,
            date: new Date()
        }
        this.messages.push(newMessage)
        return newMessage
    }

    update(id: number, updateMessageDTO: UpdateMessageDTO){
        const existingMessageIndex = this.messages.findIndex(item => item.id === id)

        if(existingMessageIndex < 0) throw new NotFoundException('Message not found')

        if(existingMessageIndex >= 0 ) {
            const existingMessage = this.messages[existingMessageIndex]
            this.messages[existingMessageIndex] = {
                ...existingMessage,
                ...updateMessageDTO
            }
        }
        return this.messages[existingMessageIndex]
    }

    remove(id: number){
        const existingMessageIndex = this.messages.findIndex(item => item.id === id)

        if(existingMessageIndex < 0) throw new NotFoundException('Message not found')        

        if(existingMessageIndex >= 0 ) {
            this.messages.splice(existingMessageIndex, 1)
        }
        return `Message with ID ${id} deleted`
    }
}
