import styled from 'styled-components';
import BaseButton from './BaseButton';

const StyledButton = styled(BaseButton)`
  background-color: green;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

/*
function StyledButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <button className={className}>{children}</button>;
}
*/

export default StyledButton;
