import { ProjectUpdateManyWithoutTeamsInput } from "./ProjectUpdateManyWithoutTeamsInput";
import { UserUpdateManyWithoutTeamsInput } from "./UserUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  description?: string | null;
  lead?: string | null;
  name?: string | null;
  projects?: ProjectUpdateManyWithoutTeamsInput;
  users?: UserUpdateManyWithoutTeamsInput;
};
