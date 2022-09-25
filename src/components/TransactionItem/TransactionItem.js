import PropTypes from 'prop-types';
import { Td } from './TransactionItem.styled';
export function TransactionItem({ item: { type, amount, currency } }) {
  return (
    <>
      <Td>{type}</Td>
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
