// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { LeftPane } from '@ui-components';
import { Balloon }from '@ui-components';
import { Avatar }from '@ui-components';

type User = {url: string, alt: string, title: string};
const users: User[] = [
  {alt: 'Marc met hoed', title: 'Ballon 1',  url:'/img/marc_met_hoed.jpg'},
  {alt: 'Marc met hoed', title: 'Ballon 2',  url:'/img/marc_met_hoed.jpg'},
  {alt: 'Marc met hoed', title: 'Ballon 3',  url:'/img/marc_met_hoed.jpg'},
  {alt: 'Marc met hoed', title: 'Ballon 4',  url:'/img/marc_met_hoed.jpg'},
  {alt: 'Marc met hoed', title: 'Ballon ',  url:'/img/marc_met_hoed.jpg'},
]

export function App() {
  const balloons = users.map((user: User) => 
    <Balloon title={user.title}><Avatar url={user.url} alt={user.alt}></Avatar></Balloon>
  );
  return (
    <LeftPane>
      {balloons}
    </LeftPane>
  );
}

export default App;
