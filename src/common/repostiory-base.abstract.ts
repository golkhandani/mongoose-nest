import { IRepositoryBase } from "./repository-base.interface"
import Mongoose, { Model, Document } from "mongoose"

class x<T> {
    y: T
}

export abstract class RepositoryBase implements IRepositoryBase<any> {

    constructor(
        private readonly modelDefinition,
        private readonly connection
    ) { }


    getModel<T extends Document>(tenant: string) {
        const model = this.connection.useDb(tenant).model(this.modelDefinition.name, this.modelDefinition.schema) as any;
        return {
            findAll: () => {

            },
            findOne: (id: number) => {

            },

            store: async (obj) => {
                return await model.create(obj)
            }
        }
    }


} 