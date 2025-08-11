import { TaskCreateNestedManyWithoutProjectsInput } from "./TaskCreateNestedManyWithoutProjectsInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ProjectCreateInput = {
  description?: string | null;
  endDate?: Date | null;
  name?: string | null;
  startDate?: Date | null;
  tasks?: TaskCreateNestedManyWithoutProjectsInput;
  team?: TeamWhereUniqueInput | null;
};
