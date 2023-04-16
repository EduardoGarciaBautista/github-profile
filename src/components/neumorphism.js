import styled from 'styled-components';
// color #e5eef7, c2: #dee8f3
export const NeumorphismCard = styled.div`
  border-radius: 30px;
  padding: 1.5rem;
  box-shadow: -6px -6px 10px 0 var(--white-card), 6px 6px 10px 0 var(--dark-gray);

  @media (max-width: 576px) {
    padding: 1rem;
  }
  @media (prefers-color-scheme: dark) {
    box-shadow: -3px -3px 5px 0 var(--white-card), 3px 3px 5px 0 var(--dark-gray);
  }
`;

export const NeumorphismLarge = styled(NeumorphismCard)`
  border-radius: 5px;
  padding: 0;
  box-shadow: -6px -6px 10px 0 var(--white-card), 6px 6px 10px 0 var(--dark-gray);
  cursor: pointer;

  &:hover {
    box-shadow: inset -2px -2px 5px 0 var(--white-card), inset 2px 2px 5px 0 var(--dark-gray);
  }

  @media (prefers-color-scheme: dark) {
    box-shadow: -3px -3px 5px 0 var(--white-card), 3px 3px 5px 0 var(--dark-gray);
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

function Neumorphism({children}) {
    return <NeumorphismCard>{children}</NeumorphismCard>;
}

export default Neumorphism;