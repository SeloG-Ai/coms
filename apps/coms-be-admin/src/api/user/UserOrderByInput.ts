import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roleId?: SortOrder;
  roles?: SortOrder;
  teamId?: SortOrder;
  telegramId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
