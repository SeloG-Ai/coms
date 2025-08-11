import { SortOrder } from "../../util/SortOrder";

export type LeaderboardOrderByInput = {
  awardedAt?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  points?: SortOrder;
  reason?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
