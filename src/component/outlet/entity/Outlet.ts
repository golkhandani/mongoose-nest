import { ModelDefinition, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Exclude, Expose, Type } from "class-transformer";
import Mongoose from "mongoose";
import { Kitchen } from "./Kitchen";

export type OutletDocument = Outlet & Mongoose.Document;

@Schema({
    timestamps: true
})
export class Outlet {

    @Type(() => Kitchen)
    @Prop()
    kitchen: Kitchen[] | string[];


}
const schema: Mongoose.Schema<Outlet> = SchemaFactory.createForClass(Outlet);
export const OutletModelDefinition: ModelDefinition = { name: Outlet.name, schema: schema };


