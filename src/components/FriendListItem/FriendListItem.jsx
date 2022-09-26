import { Status, Avatar, Name } from './FriendListItem.styled';
import PropTypes from 'prop-types';
function FriendListItem({ item: { avatar, name, isOnline } }) {
  return (
    <>
      <Status Online={isOnline === true}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </>
  );
}
FriendListItem.propTypes = {
  item: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
export default FriendListItem;

// {
//   isOnline ? 'Online' : 'Ofline';
// }
