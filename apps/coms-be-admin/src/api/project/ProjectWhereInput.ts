import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  tasks?: TaskListRelationFilter;
  team?: TeamWhereUniqueInput;
};
