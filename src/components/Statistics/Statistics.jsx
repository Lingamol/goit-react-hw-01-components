import PropTypes from 'prop-types';
import { Title, StatWrapper, List, ListItem } from './Statistics.styled';
import { StatList } from '../StatList/StatList';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function Statistics({ title, stats }) {
  return (
    <StatWrapper className="statistics">
      {title && <Title className="title">{title}</Title>}

      <List className="stat-list">
        {stats.map(item => (
          <ListItem
            className="item"
            key={item.id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <StatList stats={item} />
          </ListItem>
        ))}
      </List>
    </StatWrapper>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
