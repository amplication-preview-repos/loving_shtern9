import * as graphql from "@nestjs/graphql";
import { ProcurementRequestResolverBase } from "./base/procurementRequest.resolver.base";
import { ProcurementRequest } from "./base/ProcurementRequest";
import { ProcurementRequestService } from "./procurementRequest.service";

@graphql.Resolver(() => ProcurementRequest)
export class ProcurementRequestResolver extends ProcurementRequestResolverBase {
  constructor(protected readonly service: ProcurementRequestService) {
    super(service);
  }
}
