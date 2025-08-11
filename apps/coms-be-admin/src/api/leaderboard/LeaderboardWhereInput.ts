import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LeaderboardWhereInput = {
  awardedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  points?: IntNullableFilter;
  reason?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
