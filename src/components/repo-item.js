import styled from "styled-components";
import Language from "./language";
import Index from "../icon";

const RepoItemStyled = styled.div`
  padding-block: 1rem;
  border-block-end: 1px solid var(--grey);
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  &:last-child {
    border-block-end: none;
  }
  .title {
    display: flex;
    gap: 1rem;
    margin: 0;
    a {
      color: var(--primary);
      text-decoration: none;
    }
  }
  .public {
    border: 1px solid var(--grey);
    border-radius: 0.5rem;
    padding: 0.125rem 0.5rem;
    font: var(--caption-regular);
  }
  .description {
    margin: 0;
    font: var(--body2-regular);
  }
  .topic-list {
    display: flex;
    column-gap: 0.25rem;
  }
  .topic-item {
    color: var(--primary);
    background-color: var(--btn-bg);
    font: var(--caption-medium);
    padding: 0.25rem 0.75rem;
    border-radius: 38px;
  }

  .details {
    display: flex;
    gap: 1rem;
    font: var(--caption-regular);
    &-item {
      color: var(--grey-1);
      display: flex;
      gap: 0.5rem;
      align-items: center;
      & span::first-letter {
        text-transform: uppercase;
      }
    }
  }
`;

function RepoItem(props) {
  const updatedAt = new Date(props.updated_at);
  const currentDate = new Date();
  const diff = updatedAt - currentDate;
  const daysDiff = Math.ceil(diff / (1000 * 60 * 60 * 24));
  const timeAgo = new Intl.RelativeTimeFormat("es").format(daysDiff, "days");

  return (
    <RepoItemStyled>
      <h3 className="title">
        <a href={props.html_url}>{props.name}</a>
        {props.private && <span className="public">Public</span>}
      </h3>

      {props.description && <p className="description">{props.description}</p>}

      {props.topics.length && (
        <div className="topic-list">
          {props.topics.map((topic) => (
            <span className="topic-item" key={topic}>
              {topic}
            </span>
          ))}
        </div>
      )}

      <div className="details">
        {props.language ? <Language name={props.language} /> : null}
        <span className="details-item">
          <Index name="branch" />
          <span>{props.stargazers_count}</span>
        </span>

        <span className="details-item">
          <Index name="star" />
          <span>{props.forks_count}</span>
        </span>

        <span className="details-item">
          <span> {timeAgo} </span>
        </span>
      </div>
    </RepoItemStyled>
  );
}

export default RepoItem;
