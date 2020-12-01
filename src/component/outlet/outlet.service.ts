import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { from } from 'rxjs';
import { Outlet, OutletDocument, OutletModelDefinition } from "./entity/Outlet";
import { IRepositoryBase } from "../../common/repository-base.interface"
import { RepositoryBase } from "../../common/repostiory-base.abstract"

@Injectable()
export class OutletService extends RepositoryBase {


    constructor(@InjectConnection() connection: Connection) {
        super(OutletModelDefinition, connection);
    }

    async createNewOutlet() {

        return this.getModel("Tenancy-123").store({
            kitchen: ["Daw"]
        })

    }


}