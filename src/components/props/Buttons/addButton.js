/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBookApi } from '../../../redux/books/booksSlice';

function AddButton({
  item_id, title, author, category,
}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addBookApi({
      item_id, title, author, category,
    }));
  };

  return (
    <button type="button" onClick={handleClick} title={title}>
      Add Book
    </button>
  );
}

AddButton.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default AddButton;
