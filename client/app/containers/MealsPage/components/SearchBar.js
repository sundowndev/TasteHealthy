// @flow

import React, { useState } from 'react';
import axios from 'axios';
import { assoc, map } from 'ramda';
import '../../../styles/mealsPage.css';

type Props = {
  sendProducts: any => any,
};

const combine = data => map(assoc('quantity', 100), data);

const SearchBar = (props: Props) => {
  const [valueSearch, handleChange] = useState('');

  const handleValueChange = async (name: string) => {
    handleChange(name);

    if (name.length >= 3) {
      const products = await axios
        .get(`http://localhost:3000/products?query=${name}`)
        .then(data => data);
      props.sendProducts(products);
    } else {
      const products = await axios
        .get(`http://localhost:3000/products`)
        .then(data => combine(data));
      props.sendProducts(products);
    }
  };

  return (
    <input
      type="text"
      className="searchBar"
      value={valueSearch}
      onChange={e => handleValueChange(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default SearchBar;
