import PropTypes from 'prop-types';

export function StatList({ stats: { label, percentage } }) {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage"> {percentage}%</span>
    </>
  );
}
StatList.propTypes = {
  stats: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
