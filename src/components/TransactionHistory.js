import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionItem';
export function TransactionHistory({ items }) {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TransactionItem item={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.ptopTypes = { items: PropTypes.array.isRequired };