import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(item => (
        <li class="item" key={item.id}>
          <FriendListItem item={item} />{' '}
        </li>
      ))}
    </ul>
  );
}
export default FriendList;
