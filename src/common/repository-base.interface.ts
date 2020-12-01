import { Model, Document } from "mongoose"

export interface IRepositoryBase<T extends Document> {
    getModel(databaseName: string);
}