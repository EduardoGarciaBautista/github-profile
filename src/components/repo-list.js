import styled from "styled-components";
import RepoItem from "./repo-item";
import Card from "./card";

const RepoListStyled = styled.div`
  grid-area: list;
  display: flex;
  flex-direction: column;
  column-gap: 2rem;
  row-gap: 1.5rem;
`;

function RepoList({repoList}) {
    return (

        <RepoListStyled>
            {repoList?.map((repo) => {
                return <Card key={repo.id}>
                    <RepoItem {...repo} />
                </Card>;
            })}
        </RepoListStyled>
    );
}

export default RepoList;
