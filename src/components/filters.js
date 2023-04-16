import styled from 'styled-components'
import InputText from "./input-text";
import Selector from "./selector";

const FiltersStyled = styled.div`
  grid-area: filters;

  .action-list {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .count {
    margin-bottom: 1.5rem;
  }

  border-bottom: 1px solid var(--grey-1);
  margin-bottom: 1.5rem;

  .selectors {
    display: flex;
    gap: 1rem;
  }

  @media (max-width: 576px) {

  }
  @media (max-width: 992px) {
    .action-list {
      flex-wrap: wrap;
    }
  }
`

function Filters({repoCount = 0, setSearch, setLanguage}) {
    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const handleLanguage = (e) => {
        e.preventDefault();
        setLanguage(e.target.value);
    }
    return (
        <FiltersStyled>
            <h2 className="count">
                Repositories {repoCount}
            </h2>
            <div className="action-list">
                <InputText type="search" placeholder="Find a repository" onChange={handleChange}/>

                <div className="selectors">
                    <Selector>
                        <option value="all">All</option>
                        <option value="forks">Forks</option>
                    </Selector>

                    <Selector onChange={handleLanguage}>
                        <option value="">Language</option>
                        <option value="html">HTML</option>
                        <option value="javascript">JavaScript</option>
                        <option value="typescript">Typescript</option>
                    </Selector>

                    <Selector>
                        <option>Order</option>
                        <option value="name">Name</option>
                    </Selector>
                </div>
            </div>
        </FiltersStyled>
    )
}

export default Filters
