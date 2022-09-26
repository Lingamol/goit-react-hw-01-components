import PropTypes from 'prop-types';
import { Table, Thead, Tr, Th, TrRow } from './TransactionHistory.styled';
import { TransactionItem } from '../TransactionItem/TransactionItem';
function NameToUpperCase(text) {
  return text.toUpperCase();
}
export function TransactionHistory({ items }) {
  return (
    <Table className="transaction-history">
      <Thead>
        <Tr>
          <Th>{NameToUpperCase('Type')}</Th>
          <Th>{NameToUpperCase('Amount')}</Th>
          <Th>{NameToUpperCase('Currency')}</Th>
        </Tr>
      </Thead>

      <tbody>
        {items.map(item => (
          <TrRow key={item.id}>
            <TransactionItem item={item} />
          </TrRow>
        ))}
      </tbody>
    </Table>
  );
}
TransactionHistory.ptopTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
