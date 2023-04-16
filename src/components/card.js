import styled from 'styled-components';
// color #e5eef7, c2: #dee8f4
const NeumorphismCard = styled.div`
  border-radius: 30px;
  padding: 1.5rem;
  box-shadow: -4px -4px 10px 0 var(--white), 4px 4px 10px 0 var(--dark-gray);
`;

export const NeumorphismLarge = styled(NeumorphismCard)`
  border-radius: 10px;
  padding: 0;
  box-shadow: -4px -4px 10px 0 var(--white), 4px 4px 10px 0 var(--dark-gray);
  cursor: pointer;

  &:hover {
    box-shadow: inset -2px -2px 5px 0 var(--white), inset 2px 2px 5px 0 var(--dark-gray);
  }

`;

export const NeumorphismSmall = styled(NeumorphismLarge)`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
`;

function Card({children}) {
    return <NeumorphismCard>{children}</NeumorphismCard>;
}

export default Card;