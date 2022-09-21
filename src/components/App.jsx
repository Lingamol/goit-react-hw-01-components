import { Profile } from './Profile';
import { Statistics } from './Statistics';
import FrendList from './FriendList';
import user from '../js/user.json';
import data from '../js/data.json';
import friends from '../js/friends.json';

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
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FrendList items={friends} />
    </div>
  );
};
