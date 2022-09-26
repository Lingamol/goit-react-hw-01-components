import PropTypes from 'prop-types';
import { Td } from './TransactionItem.styled';
function ucFirst(text) {
  return text[0].toUpperCase() + text.slice(1, text.length);
}
export function TransactionItem({ item: { type, amount, currency } }) {
  return (
    <>
      <Td>{ucFirst(type)}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </>
  );
}
TransactionItem.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
