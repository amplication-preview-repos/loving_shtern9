import { Module } from "@nestjs/common";
import { ProcurementRequestModuleBase } from "./base/procurementRequest.module.base";
import { ProcurementRequestService } from "./procurementRequest.service";
import { ProcurementRequestController } from "./procurementRequest.controller";
import { ProcurementRequestResolver } from "./procurementRequest.resolver";

@Module({
  imports: [ProcurementRequestModuleBase],
  controllers: [ProcurementRequestController],
  providers: [ProcurementRequestService, ProcurementRequestResolver],
  exports: [ProcurementRequestService],
})
export class ProcurementRequestModule {}
