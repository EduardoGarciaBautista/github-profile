import styled from "styled-components";
import {isValidElement} from "react";

const ButtonStyled = styled.button`
  gap: 0.5rem;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  background: var(--buttonBG);
  color: var(--white);
  border: 1px solid var(--grey);
  min-inline-size: 135px;
  justify-content: center;
  border-radius: 0.5rem;
  padding-block: 0.25rem;
  font: var(--button);

  &:hover {
    background: var(--white);
    color: var(--button);
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
        <ButtonStyled className={className} as={component} href={link}>
            {IconComponent}
            {text}
        </ButtonStyled>
    );
}

export const ButtonContrast = styled(Button)`
  background: var(--white);
  color: var(--buttonBG);

  &:hover {
    background: var(--buttonBG);
    color: var(--white);
  }
`;

export const ButtonRounded = styled(Button)`
  min-inline-size: initial;
  border-radius: 50%;
  padding: .75rem;
  border: 2px solid var(--grey-1);
  &:hover {
    background: var(--buttonBG);
    transform: scale(1.1);
  }
`;

export default Button;
