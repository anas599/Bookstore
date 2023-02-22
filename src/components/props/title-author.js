// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function TitleAuthor({ name, author, className }) {
  return (
    <div>
      <h3 className={className}>
        {name}
      </h3>
      <p>
        {author}
      </p>
    </div>
  );
}
TitleAuthor.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
export default TitleAuthor;
