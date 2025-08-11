import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LeaderboardUpdateInput = {
  awardedAt?: Date | null;
  points?: number | null;
  reason?: string | null;
  user?: UserWhereUniqueInput | null;
};
