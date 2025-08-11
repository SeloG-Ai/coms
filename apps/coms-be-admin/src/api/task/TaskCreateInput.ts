import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskCreateInput = {
  assignee?: string | null;
  description?: string | null;
  dueDate?: Date | null;
  project?: ProjectWhereUniqueInput | null;
  status?: "Option1" | null;
  title?: string | null;
};
