import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ReminderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" source="content" />
        <TextInput label="createdBy" source="createdBy" />
        <DateTimeInput label="remindAt" source="remindAt" />
        <TextInput label="targetUser" source="targetUser" />
      </SimpleForm>
    </Edit>
  );
};
