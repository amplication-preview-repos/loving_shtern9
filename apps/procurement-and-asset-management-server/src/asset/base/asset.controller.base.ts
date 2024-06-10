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
import { AssetService } from "../asset.service";
import { AssetCreateInput } from "./AssetCreateInput";
import { Asset } from "./Asset";
import { AssetFindManyArgs } from "./AssetFindManyArgs";
import { AssetWhereUniqueInput } from "./AssetWhereUniqueInput";
import { AssetUpdateInput } from "./AssetUpdateInput";
import { InventoryFindManyArgs } from "../../inventory/base/InventoryFindManyArgs";
import { Inventory } from "../../inventory/base/Inventory";
import { InventoryWhereUniqueInput } from "../../inventory/base/InventoryWhereUniqueInput";

export class AssetControllerBase {
  constructor(protected readonly service: AssetService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Asset })
  async createAsset(@common.Body() data: AssetCreateInput): Promise<Asset> {
    return await this.service.createAsset({
      data: {
        ...data,

        purchaseOrder: data.purchaseOrder
          ? {
              connect: data.purchaseOrder,
            }
          : undefined,
      },
      select: {
        cost: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        purchaseDate: true,

        purchaseOrder: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Asset] })
  @ApiNestedQuery(AssetFindManyArgs)
  async assets(@common.Req() request: Request): Promise<Asset[]> {
    const args = plainToClass(AssetFindManyArgs, request.query);
    return this.service.assets({
      ...args,
      select: {
        cost: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        purchaseDate: true,

        purchaseOrder: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Asset })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async asset(
    @common.Param() params: AssetWhereUniqueInput
  ): Promise<Asset | null> {
    const result = await this.service.asset({
      where: params,
      select: {
        cost: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        purchaseDate: true,

        purchaseOrder: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: Asset })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAsset(
    @common.Param() params: AssetWhereUniqueInput,
    @common.Body() data: AssetUpdateInput
  ): Promise<Asset | null> {
    try {
      return await this.service.updateAsset({
        where: params,
        data: {
          ...data,

          purchaseOrder: data.purchaseOrder
            ? {
                connect: data.purchaseOrder,
              }
            : undefined,
        },
        select: {
          cost: true,
          createdAt: true,
          description: true,
          id: true,
          name: true,
          purchaseDate: true,

          purchaseOrder: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: Asset })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAsset(
    @common.Param() params: AssetWhereUniqueInput
  ): Promise<Asset | null> {
    try {
      return await this.service.deleteAsset({
        where: params,
        select: {
          cost: true,
          createdAt: true,
          description: true,
          id: true,
          name: true,
          purchaseDate: true,

          purchaseOrder: {
            select: {
              id: true,
            },
          },

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

  @common.Get("/:id/inventories")
  @ApiNestedQuery(InventoryFindManyArgs)
  async findInventories(
    @common.Req() request: Request,
    @common.Param() params: AssetWhereUniqueInput
  ): Promise<Inventory[]> {
    const query = plainToClass(InventoryFindManyArgs, request.query);
    const results = await this.service.findInventories(params.id, {
      ...query,
      select: {
        asset: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        location: true,
        quantity: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/inventories")
  async connectInventories(
    @common.Param() params: AssetWhereUniqueInput,
    @common.Body() body: InventoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventories: {
        connect: body,
      },
    };
    await this.service.updateAsset({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/inventories")
  async updateInventories(
    @common.Param() params: AssetWhereUniqueInput,
    @common.Body() body: InventoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventories: {
        set: body,
      },
    };
    await this.service.updateAsset({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/inventories")
  async disconnectInventories(
    @common.Param() params: AssetWhereUniqueInput,
    @common.Body() body: InventoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventories: {
        disconnect: body,
      },
    };
    await this.service.updateAsset({
      where: params,
      data,
      select: { id: true },
    });
  }
}
