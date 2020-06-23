import React, { useState, ReactElement } from 'react';
import { AutoComplete } from 'antd';

export const Suggestions = ({ onSelect, options, filterOptions }) => {
  const [value, setValue] = useState('');

  const handleChange = (value) => {
    setValue(value)
    filterOptions(value)
  };

  const handleSelect = (data) => {
    onSelect(data)
    setValue('')
  };
  
  return (
      <AutoComplete
        options={options}
        autoFocus={false}
        value={value}
        style={{ width: '100%', border: '0' }}
        onSelect={handleSelect}
        onSearch={handleChange}
      />
  );
};