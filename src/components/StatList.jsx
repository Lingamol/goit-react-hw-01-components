import PropTypes from 'prop-types';
export function StatList({ stats: { id, label, percentage } }) {
  return (
    <li class="item" key={id}>
      <span class="label">{label}</span>
      <span class="percentage"> {percentage}%</span>
    </li>
  );
}
StatList.propTypes = {
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
