import { Task } from "../task/Task";
import { Team } from "../team/Team";

export type Project = {
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  id: string;
  name: string | null;
  startDate: Date | null;
  tasks?: Array<Task>;
  team?: Team | null;
  updatedAt: Date;
};
