import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ReminderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Reminders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdBy" source="createdBy" />
        <TextField label="ID" source="id" />
        <TextField label="remindAt" source="remindAt" />
        <TextField label="targetUser" source="targetUser" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
