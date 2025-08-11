import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ReminderWhereInput = {
  content?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  remindAt?: DateTimeNullableFilter;
  targetUser?: StringNullableFilter;
};
