import { UserUpdateManyWithoutRolesInput } from "./UserUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  name?: string | null;
  permissions?: Array<"Option1">;
  users?: UserUpdateManyWithoutRolesInput;
};
