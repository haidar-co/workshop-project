import {BadRequestException,Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class parseObjectIdPipe implements PipeTransform<string,string>{
    transform(value:string):string{
        if(!/^[a-f\\d]{24}$/i.test(value)){
            throw new BadRequestException('invalid objectId format')
        }
        return value;
    }

}