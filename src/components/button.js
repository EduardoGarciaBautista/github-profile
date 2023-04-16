import styled from "styled-components";
import {isValidElement} from "react";
import {NeumorphismLarge} from "./neumorphism";

const ButtonStyled = styled.button`
  gap: 0.5rem;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  min-inline-size: 135px;
  justify-content: center;
  border-radius: 0.5rem;
  padding-block: 0.25rem;
  font: var(--button);
  border: none;
  background: none;
  color: var(--grey);

  &:hover {
    text-decoration: none;
  }
`;

function Button({text, link, className, icon}) {
    const component = link ? "a" : "button";

    let IconComponent = null;
    if (icon) {
        if (isValidElement(icon)) {
            IconComponent = icon;
        }
    }
    return (
        <NeumorphismLarge>
            <ButtonStyled className={className} as={component} href={link}>
                {IconComponent}
                {text}
            </ButtonStyled>
        </NeumorphismLarge>

    );
}

export const ButtonRounded = styled(Button)`
  min-inline-size: initial;
  padding: .75rem;
`;

export default Button;
