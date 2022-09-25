import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import { List, Item } from './FriendList.styled';
function FriendList({ friends }) {
  return (
    <List className="friend-list">
      {friends.map(item => (
        <Item className="item" key={item.id}>
          <FriendListItem item={item} />{' '}
        </Item>
      ))}
    </List>
  );
}
export default FriendList;
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
