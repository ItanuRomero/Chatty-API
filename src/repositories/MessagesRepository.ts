import { EntityRepository } from "typeorm";
import { Repository } from "typeorm/repository/Repository";
import { Message } from "../entities/Message";

@EntityRepository(Message)
class MessagesRepository extends Repository<Message> {

}

export {MessagesRepository};