import { SortOrder } from "../../util/SortOrder";

export type AnnouncementOrderByInput = {
  audience?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
