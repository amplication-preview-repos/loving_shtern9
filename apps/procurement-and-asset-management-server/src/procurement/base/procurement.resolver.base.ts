/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Procurement } from "./Procurement";
import { ProcurementCountArgs } from "./ProcurementCountArgs";
import { ProcurementFindManyArgs } from "./ProcurementFindManyArgs";
import { ProcurementFindUniqueArgs } from "./ProcurementFindUniqueArgs";
import { DeleteProcurementArgs } from "./DeleteProcurementArgs";
import { ProcurementService } from "../procurement.service";
@graphql.Resolver(() => Procurement)
export class ProcurementResolverBase {
  constructor(protected readonly service: ProcurementService) {}

  async _procurementsMeta(
    @graphql.Args() args: ProcurementCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Procurement])
  async procurements(
    @graphql.Args() args: ProcurementFindManyArgs
  ): Promise<Procurement[]> {
    return this.service.procurements(args);
  }

  @graphql.Query(() => Procurement, { nullable: true })
  async procurement(
    @graphql.Args() args: ProcurementFindUniqueArgs
  ): Promise<Procurement | null> {
    const result = await this.service.procurement(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Procurement)
  async deleteProcurement(
    @graphql.Args() args: DeleteProcurementArgs
  ): Promise<Procurement | null> {
    try {
      return await this.service.deleteProcurement(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}