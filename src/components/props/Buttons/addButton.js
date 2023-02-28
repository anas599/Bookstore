import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook } from '../../../redux/books/booksSlice';

function AddButton({
  id, title, author, category,
}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addBook({
      id, title, author, category,
    }));
  };

  return (
    <button type="button" onClick={handleClick} id={id} title={title}>
      Add Book
    </button>
  );
}

AddButton.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default AddButton;
