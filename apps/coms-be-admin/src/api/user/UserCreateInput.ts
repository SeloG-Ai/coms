import { LeaderboardCreateNestedManyWithoutUsersInput } from "./LeaderboardCreateNestedManyWithoutUsersInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  isActive?: boolean | null;
  lastName?: string | null;
  leaderboards?: LeaderboardCreateNestedManyWithoutUsersInput;
  password: string;
  role?: RoleWhereUniqueInput | null;
  roles: InputJsonValue;
  team?: TeamWhereUniqueInput | null;
  telegramId?: string | null;
  username: string;
};
