export type ReminderCreateInput = {
  content?: string | null;
  createdBy?: string | null;
  remindAt?: Date | null;
  targetUser?: string | null;
};
