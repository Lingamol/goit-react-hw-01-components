import PropTypes from 'prop-types';
import { Table, Thead, Tr, Th, TrRow } from './TransactionHistory.styled';
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
          <TrRow key={item.id}>
            <TransactionItem item={item} />
          </TrRow>
        ))}
      </tbody>
    </Table>
  );
}
TransactionHistory.ptopTypes = { items: PropTypes.array.isRequired };
