import { Module } from "@nestjs/common";
import { ProcurementModuleBase } from "./base/procurement.module.base";
import { ProcurementService } from "./procurement.service";
import { ProcurementController } from "./procurement.controller";
import { ProcurementResolver } from "./procurement.resolver";

@Module({
  imports: [ProcurementModuleBase],
  controllers: [ProcurementController],
  providers: [ProcurementService, ProcurementResolver],
  exports: [ProcurementService],
})
export class ProcurementModule {}
