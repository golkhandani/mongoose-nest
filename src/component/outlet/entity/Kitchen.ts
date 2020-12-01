import { ModelDefinition, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Exclude, Expose } from "class-transformer";
import Mongoose, { Types } from "mongoose";
import { OutletDocument, Outlet } from "./Outlet";



@Schema()
@Exclude()
export class Kitchen {
    @Expose()
    Id: Types.ObjectId;

    constructor(partial?: Partial<OutletDocument>) {
        return Object.assign(this, partial);
    }
    public static schema: Mongoose.Schema<Outlet> = SchemaFactory.createForClass(Kitchen);
    public static modelDefinition: ModelDefinition = { name: Kitchen.name, schema: Kitchen.schema };
}
export type KitchenDocument = Outlet & Mongoose.Document;

