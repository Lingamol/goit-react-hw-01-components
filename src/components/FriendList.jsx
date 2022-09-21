import FriendListItem from './FriendListItem';

function FriendList({ items }) {
  return (
    <ul class="friend-list">
      {items.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
}
export default FriendList;
