import styled from 'styled-components'
import {ButtonRounded} from "./button";
import Index from "../icon";

const SearchStyled = styled.div`
  position: fixed;
  bottom: 1rem;
`

function Search({setIsActive}) {
    const handleClick = () => {
        setIsActive(true);
    }
    return (
        <SearchStyled onClick={handleClick}>
            <ButtonRounded icon={<Index name="search" size={24}/>} />
        </SearchStyled>
    )
}

export default Search;
