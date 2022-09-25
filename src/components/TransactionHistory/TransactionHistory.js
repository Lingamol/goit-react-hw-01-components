import PropTypes from 'prop-types';
import { Table, Thead, Tr, Th } from './TransactionHistory.styled';
import { TransactionItem } from '../TransactionItem/TransactionItem';
export function TransactionHistory({ items }) {
  return (
    <Table className="transaction-history">
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TransactionItem item={item} />
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
TransactionHistory.ptopTypes = { items: PropTypes.array.isRequired };
