import styled from "styled-components";
import RepoItem from "./repo-item";
import Neumorphism from "./neumorphism";

const RepoListStyled = styled.div`
  grid-area: list;
  display: flex;
  flex-direction: column;
  column-gap: 2rem;
  row-gap: 1.5rem;

  .error-message {
    font-size: 20px;
    font: var(--body1-regular);
    text-align: center;
  }
`;

function RepoList({repoList, search = '', language = ''}) {

    let list = repoList;
    if (search) {
        list = list.filter((repo) => {
            return repo.name?.toLowerCase().includes(search.toLowerCase());
        })
    }
    if (language) {
        list = list.filter((repo) => {
            return repo.language?.toLowerCase().includes(language.toLowerCase());
        })
    }

    return (

        <RepoListStyled>
            {
                list.length === 0 ?
                    <p className="error-message">No results found</p> :
                    list?.map((repo) => {
                        return <Neumorphism key={repo.id}>
                            <RepoItem {...repo} />
                        </Neumorphism>;
                    })
            }
        </RepoListStyled>
    );
}

export default RepoList;
