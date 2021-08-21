import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;
  @media (min-width: 992px) {
    margin-top: 15rem;
  }

  h4 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    /* Agregar comilla (") al inicio de la frase */
    &::before {
      content: open-quote;
      font-size: 8rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

export const Frase = ({ frase }) => {
  // Si queremos no retonar la frase al estar vacía podemos usar el sig código:
  // if (Object.keys(frase).length === 0) return null;

  return (
    <ContenedorFrase>
      <h4>{frase.quote}</h4>
      <p>- {frase.author}</p>
    </ContenedorFrase>
  );
};
