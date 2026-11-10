import{Prop,Schema,SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
@Schema({timestamps:true})
export class Category{
    // @Prop({required:true,unique:true,trim:true})
    // id:number;
    @Prop({required:true,unique:true,trim:true})
    slug:string;
    @Prop({required:true,trim:true})
    name:string;

}
export type CategoryDocument=HydratedDocument<Category>;
export const CategorySchema=SchemaFactory.createForClass(Category);
 

