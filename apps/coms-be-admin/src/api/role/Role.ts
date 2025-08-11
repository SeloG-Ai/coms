import { User } from "../user/User";

export type Role = {
  createdAt: Date;
  id: string;
  name: string | null;
  permissions?: Array<"Option1">;
  updatedAt: Date;
  users?: Array<User>;
};
