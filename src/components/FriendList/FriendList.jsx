import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(item => (
        <li className="item" key={item.id}>
          <FriendListItem item={item} />{' '}
        </li>
      ))}
    </ul>
  );
}
export default FriendList;
