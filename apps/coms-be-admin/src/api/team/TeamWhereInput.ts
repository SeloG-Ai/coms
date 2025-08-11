import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type TeamWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  lead?: StringNullableFilter;
  name?: StringNullableFilter;
  projects?: ProjectListRelationFilter;
  users?: UserListRelationFilter;
};
