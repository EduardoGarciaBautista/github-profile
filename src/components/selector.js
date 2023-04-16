import styled from 'styled-components';
import {NeumorphismLarge} from "./neumorphism";

const SelectorStyled = styled.select`
  border: none;
  padding: .5rem;
  background: transparent;
  outline: none;
  color: var(--grey);
  font: var(--body1-regular);
`;

function Selector({children, ...props}) {
    return (
        <NeumorphismLarge {...props}>
            <SelectorStyled>
                {children}
            </SelectorStyled>
        </NeumorphismLarge>

    );
}

export default Selector;