import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const LeaderboardList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Leaderboards"}
      perPage={50}
      pagination={<Pagination />}
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
