import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../../redux/books/booksSlice';

function RemoveButton({ id }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBook(id));
  };

  return (
    <button type="button" onClick={handleClick}>
      Remove
    </button>
  );
}

RemoveButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RemoveButton;
