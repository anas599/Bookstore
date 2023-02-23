import PropTypes from 'prop-types';

function TitleAuthor({
  name, author, category, className,
}) {
  return (
    <div>
      <p>{category}</p>
      <h3 className={className}>{name}</h3>
      <p>{author}</p>
    </div>
  );
}
TitleAuthor.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
export default TitleAuthor;
