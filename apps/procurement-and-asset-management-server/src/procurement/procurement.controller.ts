import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProcurementService } from "./procurement.service";
import { ProcurementControllerBase } from "./base/procurement.controller.base";

@swagger.ApiTags("procurements")
@common.Controller("procurements")
export class ProcurementController extends ProcurementControllerBase {
  constructor(protected readonly service: ProcurementService) {
    super(service);
  }
}
