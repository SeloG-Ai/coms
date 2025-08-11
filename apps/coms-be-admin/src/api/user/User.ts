import { Leaderboard } from "../leaderboard/Leaderboard";
import { Role } from "../role/Role";
import { JsonValue } from "type-fest";
import { Team } from "../team/Team";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  isActive: boolean | null;
  lastName: string | null;
  leaderboards?: Array<Leaderboard>;
  role?: Role | null;
  roles: JsonValue;
  team?: Team | null;
  telegramId: string | null;
  updatedAt: Date;
  username: string;
};
