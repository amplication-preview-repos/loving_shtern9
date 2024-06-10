/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AssetListRelationFilter } from "../../asset/base/AssetListRelationFilter";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnumPurchaseOrderStatus } from "./EnumPurchaseOrderStatus";
import { SupplierWhereUniqueInput } from "../../supplier/base/SupplierWhereUniqueInput";

@InputType()
class PurchaseOrderWhereInput {
  @ApiProperty({
    required: false,
    type: () => AssetListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AssetListRelationFilter)
  @IsOptional()
  @Field(() => AssetListRelationFilter, {
    nullable: true,
  })
  assets?: AssetListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  orderDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  orderNumber?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumPurchaseOrderStatus,
  })
  @IsEnum(EnumPurchaseOrderStatus)
  @IsOptional()
  @Field(() => EnumPurchaseOrderStatus, {
    nullable: true,
  })
  status?: "Option1";

  @ApiProperty({
    required: false,
    type: () => SupplierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupplierWhereUniqueInput)
  @IsOptional()
  @Field(() => SupplierWhereUniqueInput, {
    nullable: true,
  })
  supplier?: SupplierWhereUniqueInput;
}

export { PurchaseOrderWhereInput as PurchaseOrderWhereInput };