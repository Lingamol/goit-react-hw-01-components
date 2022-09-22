import PropTypes from 'prop-types';
import { StatList } from '../StatList/StatList';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        {stats.map(item => (
          <li
            class="item"
            key={item.id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <StatList stats={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
