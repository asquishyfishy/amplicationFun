import { SomethinWhereInput } from "./SomethinWhereInput";
import { SomethinOrderByInput } from "./SomethinOrderByInput";

export type SomethinFindManyArgs = {
  where?: SomethinWhereInput;
  orderBy?: Array<SomethinOrderByInput>;
  skip?: number;
  take?: number;
};
