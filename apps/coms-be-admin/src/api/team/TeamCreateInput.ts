import { ProjectCreateNestedManyWithoutTeamsInput } from "./ProjectCreateNestedManyWithoutTeamsInput";
import { UserCreateNestedManyWithoutTeamsInput } from "./UserCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  description?: string | null;
  lead?: string | null;
  name?: string | null;
  projects?: ProjectCreateNestedManyWithoutTeamsInput;
  users?: UserCreateNestedManyWithoutTeamsInput;
};
