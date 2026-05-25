import React from 'react'

import { InputContainer } from './styles';

function Input({value, onChange, onKeyPress, placeholder, disabled}) {
  return (
    <InputContainer>
        <input 
          value={value} 
          onChange={onChange}
          onKeyPress={onKeyPress}
          placeholder={placeholder}
          disabled={disabled}
        />
    </InputContainer>
  )
}

export default Input
