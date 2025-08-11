import { LeaderboardUpdateManyWithoutUsersInput } from "./LeaderboardUpdateManyWithoutUsersInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  isActive?: boolean | null;
  lastName?: string | null;
  leaderboards?: LeaderboardUpdateManyWithoutUsersInput;
  password?: string;
  role?: RoleWhereUniqueInput | null;
  roles?: InputJsonValue;
  team?: TeamWhereUniqueInput | null;
  telegramId?: string | null;
  username?: string;
};
