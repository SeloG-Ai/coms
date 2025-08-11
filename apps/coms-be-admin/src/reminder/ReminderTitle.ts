import { Reminder as TReminder } from "../api/reminder/Reminder";

export const REMINDER_TITLE_FIELD = "content";

export const ReminderTitle = (record: TReminder): string => {
  return record.content?.toString() || String(record.id);
};
