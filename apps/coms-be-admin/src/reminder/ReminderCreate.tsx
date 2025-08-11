import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ReminderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" source="content" />
        <TextInput label="createdBy" source="createdBy" />
        <DateTimeInput label="remindAt" source="remindAt" />
        <TextInput label="targetUser" source="targetUser" />
      </SimpleForm>
    </Create>
  );
};
