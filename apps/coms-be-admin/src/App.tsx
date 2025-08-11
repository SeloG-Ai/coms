import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { TeamList } from "./team/TeamList";
import { TeamCreate } from "./team/TeamCreate";
import { TeamEdit } from "./team/TeamEdit";
import { TeamShow } from "./team/TeamShow";
import { AnnouncementList } from "./announcement/AnnouncementList";
import { AnnouncementCreate } from "./announcement/AnnouncementCreate";
import { AnnouncementEdit } from "./announcement/AnnouncementEdit";
import { AnnouncementShow } from "./announcement/AnnouncementShow";
import { ReminderList } from "./reminder/ReminderList";
import { ReminderCreate } from "./reminder/ReminderCreate";
import { ReminderEdit } from "./reminder/ReminderEdit";
import { ReminderShow } from "./reminder/ReminderShow";
import { LeaderboardList } from "./leaderboard/LeaderboardList";
import { LeaderboardCreate } from "./leaderboard/LeaderboardCreate";
import { LeaderboardEdit } from "./leaderboard/LeaderboardEdit";
import { LeaderboardShow } from "./leaderboard/LeaderboardShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"coms-be"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="Team"
          list={TeamList}
          edit={TeamEdit}
          create={TeamCreate}
          show={TeamShow}
        />
        <Resource
          name="Announcement"
          list={AnnouncementList}
          edit={AnnouncementEdit}
          create={AnnouncementCreate}
          show={AnnouncementShow}
        />
        <Resource
          name="Reminder"
          list={ReminderList}
          edit={ReminderEdit}
          create={ReminderCreate}
          show={ReminderShow}
        />
        <Resource
          name="Leaderboard"
          list={LeaderboardList}
          edit={LeaderboardEdit}
          create={LeaderboardCreate}
          show={LeaderboardShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
