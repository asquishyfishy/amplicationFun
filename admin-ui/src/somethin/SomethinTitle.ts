import { Somethin as TSomethin } from "../api/somethin/Somethin";

export const SOMETHIN_TITLE_FIELD = "id";

export const SomethinTitle = (record: TSomethin): string => {
  return record.id || record.id;
};
