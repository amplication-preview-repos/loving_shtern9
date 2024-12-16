import * as graphql from "@nestjs/graphql";
import { ProcurementResolverBase } from "./base/procurement.resolver.base";
import { Procurement } from "./base/Procurement";
import { ProcurementService } from "./procurement.service";

@graphql.Resolver(() => Procurement)
export class ProcurementResolver extends ProcurementResolverBase {
  constructor(protected readonly service: ProcurementService) {
    super(service);
  }
}
