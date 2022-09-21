import PropTypes from 'prop-types';
import { StatList } from './StatList';
export function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        {stats.map(item => (
          <li class="item" key={item.id}>
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
