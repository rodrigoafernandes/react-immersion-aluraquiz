import React from 'react';
import styled from 'styled-components';

const QuizDevopsWrapper = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
`;

export default function QuizDevops() {
  return (
    <QuizDevopsWrapper>
      Página de quizsssssssssssssssss
    </QuizDevopsWrapper>
  );
}
