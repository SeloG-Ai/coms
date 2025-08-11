import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
} from "react-admin";

export const AnnouncementEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="audience"
          label="audience"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="content" multiline source="content" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
