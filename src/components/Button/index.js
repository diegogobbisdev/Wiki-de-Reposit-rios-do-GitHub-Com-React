import React from 'react'

import { ButtonContainer } from './styles';

function Button({onClick, disabled = false, isLoading = false}) {
  return (
    <ButtonContainer 
      onClick={onClick}
      disabled={disabled}
      isLoading={isLoading}
    >
       {isLoading ? 'Buscando...' : 'Buscar'}
    </ButtonContainer>
  )
}

export default Button
