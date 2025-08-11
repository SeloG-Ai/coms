import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ProjectUpdateInput = {
  description?: string | null;
  endDate?: Date | null;
  name?: string | null;
  startDate?: Date | null;
  tasks?: TaskUpdateManyWithoutProjectsInput;
  team?: TeamWhereUniqueInput | null;
};
