import { SortOrder } from "../../util/SortOrder";

export type ReminderOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  id?: SortOrder;
  remindAt?: SortOrder;
  targetUser?: SortOrder;
  updatedAt?: SortOrder;
};
