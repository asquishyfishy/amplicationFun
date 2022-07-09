import { Module } from "@nestjs/common";
import { SomethinModuleBase } from "./base/somethin.module.base";
import { SomethinService } from "./somethin.service";
import { SomethinController } from "./somethin.controller";
import { SomethinResolver } from "./somethin.resolver";

@Module({
  imports: [SomethinModuleBase],
  controllers: [SomethinController],
  providers: [SomethinService, SomethinResolver],
  exports: [SomethinService],
})
export class SomethinModule {}
