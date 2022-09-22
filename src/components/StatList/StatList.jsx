import PropTypes from 'prop-types';

export function StatList({ stats: { label, percentage } }) {
  return (
    <>
      <span class="label">{label}</span>
      <span class="percentage"> {percentage}%</span>
    </>
  );
}
StatList.propTypes = {
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
