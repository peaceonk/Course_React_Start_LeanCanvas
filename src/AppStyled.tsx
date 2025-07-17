import Card from './components/CssStyling/StyledComponents/Card';
import BaseButton from './components/CssStyling/StyledComponents/BaseButton';
import StyledButton from './components/CssStyling/StyledComponents/StyledButton';

function AppStyled() {
  return (
    <>
      <Card />
      <hr />
      <BaseButton>BaseButton</BaseButton>
      <StyledButton>StyledButton</StyledButton>
    </>
  );
}

export default AppStyled;
