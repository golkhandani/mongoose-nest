import { Module } from '@nestjs/common';
import { OutletController } from './outlet.controller';
import { OutletService } from './outlet.service';

@Module({
    imports: [],
    controllers: [OutletController],
    providers: [OutletService],
})
export class OutletModule { };