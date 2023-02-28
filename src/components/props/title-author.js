import PropTypes from 'prop-types';

function TitleAuthor({
  name, author, category, className, id,
}) {
  return (
    <div id={id}>
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
  id: PropTypes.string.isRequired,

};
export default TitleAuthor;
