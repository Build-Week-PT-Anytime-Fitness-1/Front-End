import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
  font-family: Ubuntu;
  background: #ca1f3d;
  font-size: 22px;
  color: #f7f7f7;
  border-radius: 100px;
  margin-top: 30px;
  border: none;
  font-weight: bold;
  line-height: 25px;
  padding: 9px 0;
  cursor: pointer;
  width: 163px;
`;

export default function Button({ textContent }) {
  return <ButtonComponent>{textContent}</ButtonComponent>;
}
