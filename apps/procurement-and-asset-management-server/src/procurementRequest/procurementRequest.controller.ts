import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProcurementRequestService } from "./procurementRequest.service";
import { ProcurementRequestControllerBase } from "./base/procurementRequest.controller.base";

@swagger.ApiTags("procurementRequests")
@common.Controller("procurementRequests")
export class ProcurementRequestController extends ProcurementRequestControllerBase {
  constructor(protected readonly service: ProcurementRequestService) {
    super(service);
  }
}
