import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SomethinResolverBase } from "./base/somethin.resolver.base";
import { Somethin } from "./base/Somethin";
import { SomethinService } from "./somethin.service";

@graphql.Resolver(() => Somethin)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SomethinResolver extends SomethinResolverBase {
  constructor(
    protected readonly service: SomethinService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
