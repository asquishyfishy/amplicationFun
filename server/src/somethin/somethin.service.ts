import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SomethinServiceBase } from "./base/somethin.service.base";

@Injectable()
export class SomethinService extends SomethinServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
