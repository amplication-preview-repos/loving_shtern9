/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ProcurementRequestService } from "../procurementRequest.service";
import { ProcurementRequestCreateInput } from "./ProcurementRequestCreateInput";
import { ProcurementRequest } from "./ProcurementRequest";
import { ProcurementRequestFindManyArgs } from "./ProcurementRequestFindManyArgs";
import { ProcurementRequestWhereUniqueInput } from "./ProcurementRequestWhereUniqueInput";
import { ProcurementRequestUpdateInput } from "./ProcurementRequestUpdateInput";

export class ProcurementRequestControllerBase {
  constructor(protected readonly service: ProcurementRequestService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProcurementRequest })
  async createProcurementRequest(
    @common.Body() data: ProcurementRequestCreateInput
  ): Promise<ProcurementRequest> {
    return await this.service.createProcurementRequest({
      data: {
        ...data,

        supplier: data.supplier
          ? {
              connect: data.supplier,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        requestDate: true,
        status: true,

        supplier: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ProcurementRequest] })
  @ApiNestedQuery(ProcurementRequestFindManyArgs)
  async procurementRequests(
    @common.Req() request: Request
  ): Promise<ProcurementRequest[]> {
    const args = plainToClass(ProcurementRequestFindManyArgs, request.query);
    return this.service.procurementRequests({
      ...args,
      select: {
        createdAt: true,
        id: true,
        requestDate: true,
        status: true,

        supplier: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProcurementRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async procurementRequest(
    @common.Param() params: ProcurementRequestWhereUniqueInput
  ): Promise<ProcurementRequest | null> {
    const result = await this.service.procurementRequest({
      where: params,
      select: {
        createdAt: true,
        id: true,
        requestDate: true,
        status: true,

        supplier: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ProcurementRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProcurementRequest(
    @common.Param() params: ProcurementRequestWhereUniqueInput,
    @common.Body() data: ProcurementRequestUpdateInput
  ): Promise<ProcurementRequest | null> {
    try {
      return await this.service.updateProcurementRequest({
        where: params,
        data: {
          ...data,

          supplier: data.supplier
            ? {
                connect: data.supplier,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          requestDate: true,
          status: true,

          supplier: {
            select: {
              id: true,
            },
          },

          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ProcurementRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProcurementRequest(
    @common.Param() params: ProcurementRequestWhereUniqueInput
  ): Promise<ProcurementRequest | null> {
    try {
      return await this.service.deleteProcurementRequest({
        where: params,
        select: {
          createdAt: true,
          id: true,
          requestDate: true,
          status: true,

          supplier: {
            select: {
              id: true,
            },
          },

          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
