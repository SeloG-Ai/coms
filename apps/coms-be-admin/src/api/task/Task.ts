import { Project } from "../project/Project";

export type Task = {
  assignee: string | null;
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  project?: Project | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
