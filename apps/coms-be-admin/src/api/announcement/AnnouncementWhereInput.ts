import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AnnouncementWhereInput = {
  audience?: "Option1";
  content?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
