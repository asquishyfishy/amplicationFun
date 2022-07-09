import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SomethinService } from "./somethin.service";
import { SomethinControllerBase } from "./base/somethin.controller.base";

@swagger.ApiTags("somethins")
@common.Controller("somethins")
export class SomethinController extends SomethinControllerBase {
  constructor(
    protected readonly service: SomethinService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
