import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookAPI } from '../../../redux/books/booksSlice';

function RemoveButton({ id }) {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(deleteBookAPI(id));
  };

  return (
    <button type="button" onClick={handleRemoveBook} id={id}>
      Remove
    </button>
  );
}

RemoveButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RemoveButton;
