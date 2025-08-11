import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LeaderboardCreateInput = {
  awardedAt?: Date | null;
  points?: number | null;
  reason?: string | null;
  user?: UserWhereUniqueInput | null;
};
