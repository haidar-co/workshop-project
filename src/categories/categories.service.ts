import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto.js';
import { UpdateCategoryDto } from './dto/update-category.dto.js';
import{BadRequestException,NotFoundException} from '@nestjs/common';
import {Category} from './schemas/category.schema.js';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category.name) private readonly categoryModel:Model<Category>) {}
  create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
  }

  async findAll():Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  
  async findOne(id:string):Promise<Category> {
   
    const category= await this.categoryModel.findById(id).exec();
    if(!category){
      throw new NotFoundException(`category with id ${id} not found`);
    }
    return category;
  }

//   update(id: number, updateCategoryDto: UpdateCategoryDto) {
//     return `This action updates a #${id} category`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} category`;
//   }
 }
