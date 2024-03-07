// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { LeftPane } from '@ui-components';
import { Balloon }from '@ui-components';
import { Avatar }from '@ui-components';
import { ContentPane }from '@ui-components';
import { ContentHeader }from '@ui-components';
import { TextFieldContainer } from '@ui-components';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import React from 'react';

type User = {id: number, url: string, alt: string, title: string};
const baseURL = 'http://localhost:4200/api/users.json';
let balloons: JSX.Element[] = [];

export function App() {
  const [users, setUsers] = React.useState([])
  const [selectedUser, setSelectedUser] = React.useState(-1)

  React.useEffect(()=>{
    axios.get(baseURL)
    .then(({data}) => {
      setUsers(data);
    })
  },[]);
  
    balloons = users
    ? users.map((user: User) => 
      <Balloon
        key={user.id} 
        id={user.id} 
        title={user.title}
        selectBalloon={(id: number) => setSelectedUser(id)}
        isSelected={selectedUser === user.id}
        >
          <Avatar url={user.url} alt={user.alt}></Avatar>
        </Balloon>
    )
    : [];

  return (
    <Grid container direction="row">
      <Grid item xs={3}>
        <LeftPane>
          {balloons}
        </LeftPane>
      </Grid>
      <Grid item xs={9}>
        <Grid item xs={12}>
          <ContentHeader title="Whatschat???">
          </ContentHeader>
        </Grid>
        <Grid item xs={12}>
          <ContentPane>
          </ContentPane>
        </Grid>
        <Grid item xs={12}>
          <TextFieldContainer></TextFieldContainer>
        </Grid>
      </Grid>
  </Grid>
  );
}

export default App;
