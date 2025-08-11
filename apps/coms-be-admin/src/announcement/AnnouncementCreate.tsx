import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
} from "react-admin";

export const AnnouncementCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
