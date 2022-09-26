import Profile from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import FrendList from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../js/user.json';
import data from '../js/data.json';
import friends from '../js/friends.json';
import transactions from '../js/transactions.json';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      {/* React homework template */}
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FrendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
