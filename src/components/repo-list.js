import styled from "styled-components";
import RepoItem from "./repo-item";

const RepoListStyled = styled.div`
  grid-area: list;
  display: flex;
  flex-direction: column;
  column-gap: 2rem;
`;

function RepoList({ repoList }) {
  return (
    <RepoListStyled>
      {repoList?.map((repo) => {
        return <RepoItem key={repo.id} {...repo} />;
      })}
    </RepoListStyled>
  );
}

export default RepoList;
