import PropTypes from 'prop-types';
import { Label, Percentage } from './StatList.styled';

export function StatList({ stats: { label, percentage } }) {
  return (
    <>
      <Label className="label">{label}</Label>
      <Percentage className="percentage"> {percentage}%</Percentage>
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
