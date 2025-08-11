import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { ROLE_TITLE_FIELD } from "../role/RoleTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="Last Name" source="lastName" />
        <ReferenceField label="Role" source="role.id" reference="Role">
          <TextField source={ROLE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Roles" source="roles" />
        <ReferenceField label="Team" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="telegramId" source="telegramId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="Leaderboard"
          target="userId"
          label="Leaderboards"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="awardedAt" source="awardedAt" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="points" source="points" />
            <TextField label="reason" source="reason" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
