import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ _id: false })
@ObjectType()
export class Certification extends Document {
  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  name: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  institute: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, reqßuired: false })
  year: string;

  @Field(() => [String], { nullable: true })
  @Prop({ type: [String], required: false })
  points: string[];
}

export const certificationSchema = SchemaFactory.createForClass(Certification);
