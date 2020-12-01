import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { OutletModule } from './component/outlet/outlet.module';

@Module({
  imports: [
    CommonModule,
    OutletModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
