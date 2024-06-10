/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Procurement as PrismaProcurement } from "@prisma/client";

export class ProcurementServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProcurementCountArgs, "select">
  ): Promise<number> {
    return this.prisma.procurement.count(args);
  }

  async procurements<T extends Prisma.ProcurementFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProcurementFindManyArgs>
  ): Promise<PrismaProcurement[]> {
    return this.prisma.procurement.findMany<Prisma.ProcurementFindManyArgs>(
      args
    );
  }
  async procurement<T extends Prisma.ProcurementFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProcurementFindUniqueArgs>
  ): Promise<PrismaProcurement | null> {
    return this.prisma.procurement.findUnique(args);
  }
  async createProcurement<T extends Prisma.ProcurementCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProcurementCreateArgs>
  ): Promise<PrismaProcurement> {
    return this.prisma.procurement.create<T>(args);
  }
  async updateProcurement<T extends Prisma.ProcurementUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProcurementUpdateArgs>
  ): Promise<PrismaProcurement> {
    return this.prisma.procurement.update<T>(args);
  }
  async deleteProcurement<T extends Prisma.ProcurementDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProcurementDeleteArgs>
  ): Promise<PrismaProcurement> {
    return this.prisma.procurement.delete(args);
  }
}
