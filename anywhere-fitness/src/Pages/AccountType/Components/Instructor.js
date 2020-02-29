import React from 'react';
import styled from 'styled-components';

import instructorImage from '../../Images/instructorImage.png';

const InstructorContainer = styled.div`
  text-align: center;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.36px;
    color: #f7f7f7;
    margin: 0 0 5px 0;
  }
`;

export default function InstructorType() {
  return (
    <InstructorContainer>
      <h2 style={{ color: '#CA1F3D' }}>Instructor</h2>
      <img src={instructorImage} alt='instructor athlete'></img>
    </InstructorContainer>
  );
}