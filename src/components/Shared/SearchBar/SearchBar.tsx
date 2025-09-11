import { useCombobox } from 'downshift';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

// ** Styles
import styles from './SearchBar.module.css';

// ** Services
import { ProductService } from '@/services/product/Product.service';

// ** Types
import type { IProduct } from '@/types/Product.type';

export default function SearchBar() {
  const productService = new ProductService();

  const [inputItems, setInputItems] = useState<IProduct[]>([]);
  const [inputValue, setInputValue] = useState('');

  const navigate = useNavigate();

  const searchDelay = 500;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inputValue.trim()) {
        productService
          .findBySearch(inputValue)
          .then((data) => setInputItems(data))
          .catch((error) => console.error(error));
      } else {
        setInputItems([]);
      }
    }, searchDelay);

    return () => clearTimeout(timeout);
  }, [inputValue]);

  const { isOpen, getMenuProps, getInputProps, getItemProps, highlightedIndex } = useCombobox({
    items: inputItems,
    inputValue,
    itemToString: (item) => item?.name || '',
    onInputValueChange: ({ inputValue }) => setInputValue(inputValue || ''),
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        navigate(`/producto/${selectedItem.id}`);
      }
    },
    stateReducer: (_, actionAndChanges) => {
      const { type, changes } = actionAndChanges;

      if (type === useCombobox.stateChangeTypes.ItemClick) {
        return {
          ...changes,
          inputValue: '',
          isOpen: false,
        };
      }

      return changes;
    },
  });

  return (
    <div className="position-relative w-100 ms-lg-5 ms-0">
      <input
        {...getInputProps({
          className: `form-control me-2 bg-dark text-white ${styles['search-input']} flex-grow-1 pe-5`,
          placeholder: 'Buscar productos...',
        })}
      />
      <i className={`bi bi-search ${styles['search-icon']}`}></i>
      <ul
        {...getMenuProps()}
        className={`list-group position-absolute w-100 mt-1 ${styles['search-menu-props']} ${isOpen ? 'show' : 'visually-hidden'}`}
      >
        {inputItems.map((item, index) => (
          <li
            key={item.id}
            {...getItemProps({ item, index })}
            className={`list-group-item ${highlightedIndex === index ? 'active' : ''}`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
