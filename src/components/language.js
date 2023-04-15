import styled from "styled-components";

const LanguageStyled = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  &:before {
    content: "";
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${({ color }) => color};
  }
`;

function Language({ name }) {
  const languages = {
    ruby: {
      color: "red",
    },
    css: {
      color: "green",
    },
    javascript: {
      color: "yellow",
    },
  };
  const formattedName = name.toLowerCase();
  const color = languages[formattedName]
    ? languages[formattedName].color
    : "white";

  return <LanguageStyled color={color}>{name}</LanguageStyled>;
}

export default Language;
