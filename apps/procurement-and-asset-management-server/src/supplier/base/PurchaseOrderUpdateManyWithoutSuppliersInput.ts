/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PurchaseOrderWhereUniqueInput } from "../../purchaseOrder/base/PurchaseOrderWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PurchaseOrderUpdateManyWithoutSuppliersInput {
  @Field(() => [PurchaseOrderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PurchaseOrderWhereUniqueInput],
  })
  connect?: Array<PurchaseOrderWhereUniqueInput>;

  @Field(() => [PurchaseOrderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PurchaseOrderWhereUniqueInput],
  })
  disconnect?: Array<PurchaseOrderWhereUniqueInput>;

  @Field(() => [PurchaseOrderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PurchaseOrderWhereUniqueInput],
  })
  set?: Array<PurchaseOrderWhereUniqueInput>;
}

export { PurchaseOrderUpdateManyWithoutSuppliersInput as PurchaseOrderUpdateManyWithoutSuppliersInput };