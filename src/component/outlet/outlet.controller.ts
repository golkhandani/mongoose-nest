import { Controller, Get } from '@nestjs/common';
import { OutletService } from './outlet.service';

@Controller('Outlet')
export class OutletController {
    constructor(private readonly outletService: OutletService) { }

    @Get()
    getAll() {
        return this.outletService.createNewOutlet()
    }
}