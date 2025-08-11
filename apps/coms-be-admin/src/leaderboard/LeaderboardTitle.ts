import { Leaderboard as TLeaderboard } from "../api/leaderboard/Leaderboard";

export const LEADERBOARD_TITLE_FIELD = "reason";

export const LeaderboardTitle = (record: TLeaderboard): string => {
  return record.reason?.toString() || String(record.id);
};
