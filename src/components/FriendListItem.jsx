import PropTypes from 'prop-types';
function FriendListItem({ item: { avatar, name, isOnline } }) {
  return (
    <>
      <span class="status">{isOnline ? 'Online' : 'Ofline'}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </>
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