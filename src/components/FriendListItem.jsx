import PropTypes from 'prop-types';
function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li class="item" key={id}>
      <span class="status">{isOnline ? 'Online' : 'Ofline'}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
