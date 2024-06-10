import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProcurementRequestServiceBase } from "./base/procurementRequest.service.base";

@Injectable()
export class ProcurementRequestService extends ProcurementRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
