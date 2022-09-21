import PropTypes from 'prop-types';
function FriendListItem({ item: { avatar, name, isOnline, id } }) {
  return (
    <li class="item" key={id}>
      <span class="status">{isOnline ? 'Online' : 'Ofline'}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
export default FriendListItem;
