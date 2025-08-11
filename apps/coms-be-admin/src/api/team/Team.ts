import { Project } from "../project/Project";
import { User } from "../user/User";

export type Team = {
  createdAt: Date;
  description: string | null;
  id: string;
  lead: string | null;
  name: string | null;
  projects?: Array<Project>;
  updatedAt: Date;
  users?: Array<User>;
};
