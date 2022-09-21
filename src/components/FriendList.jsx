import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(item => (
        <FriendListItem item={item} />
      ))}
    </ul>
  );
}
export default FriendList;
