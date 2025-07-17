// import styles from './Card.module.css';

import styled from 'styled-components';

// styled-component 공식 : $를 붙여주면 해당 props가 하위리액트node에 전달 되거나 DOM요소로 렌더링 되는것을 방지하여 Styled-Component에서만 사용됨

// interface 타입 선언방식
/*
interface CardContainerProps {
  $dark?: boolean;
}

//const CardContainer = styled('div').attrs<CardContainerProps>(() => ({
const CardContainer = styled.div.attrs<CardContainerProps>(() => ({
className: 'card-container',
}))<CardContainerProps>`
  border: 2px solid #393939;
  border-radius: 6px;
  padding: 24px;

  ${props =>
    //console.log('CardContainer > props : ', props);
    props.$dark &&
    `
      background-color: black;
      color: white;
      border: none;
    `}
`;
*/

// inline 타입 선언 방식
//const CardContainer = styled('div').attrs<{ $dark: boolean }>(() => ({
const CardContainer = styled.div.attrs<{ $dark: boolean }>(() => ({
  className: 'card-container',
}))<{ $dark?: boolean }>`
  border: 2px solid #393939;
  border-radius: 6px;
  padding: 24px;

  ${props =>
    props.$dark &&
    `
      background-color: black;
      color: white;
      border: none;
    `}
`;

function Card() {
  return (
    /*
    <div className={styles['card-container']}>
      <h2>Styled Comonent Card</h2>
      <p>This is Component made of Styled-Comonents</p>
    </div>
    */

    // <CardContainer>
    // <CardContainer $dark>
    // <CardContainer $dark={false}>
    <CardContainer $dark={true}>
      <h2>Styled Comonent Card</h2>
      <p>This is Component made of Styled-Comonents</p>
    </CardContainer>
  );
}

export default Card;
