import { User } from "../user/User";

export type Leaderboard = {
  awardedAt: Date | null;
  createdAt: Date;
  id: string;
  points: number | null;
  reason: string | null;
  updatedAt: Date;
  user?: User | null;
};
