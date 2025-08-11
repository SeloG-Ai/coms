import { UserCreateNestedManyWithoutRolesInput } from "./UserCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  name?: string | null;
  permissions?: Array<"Option1">;
  users?: UserCreateNestedManyWithoutRolesInput;
};
