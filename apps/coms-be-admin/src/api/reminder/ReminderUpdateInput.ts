export type ReminderUpdateInput = {
  content?: string | null;
  createdBy?: string | null;
  remindAt?: Date | null;
  targetUser?: string | null;
};
