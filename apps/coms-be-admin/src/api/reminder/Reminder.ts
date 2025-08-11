export type Reminder = {
  content: string | null;
  createdAt: Date;
  createdBy: string | null;
  id: string;
  remindAt: Date | null;
  targetUser: string | null;
  updatedAt: Date;
};
