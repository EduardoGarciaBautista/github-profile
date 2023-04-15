import styled from "styled-components";
import Icon from "../icon";
import Button from "./button";

const ProfileStyled = styled.div`
  grid-area: profile;
  .avatar {
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid var(--grey-1);
    box-sizing: border-box;
    margin-block-end: 1.5rem;
  }
  .name {
    color: var(--white);
    font: var(--headline1);
    margin: 0;
    margin-block-end: 0.5rem;
  }
  .username {
    margin-block: 0.5rem;
    color: var(--headline2-light);
    margin-block-end: 1.5rem;
  }
  .info {
    color: var(--grey-1);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-block: 1rem;
    font: var(--body2-semi-bold);
  }
  a:hover {
    text-decoration: underline;
  }
  .buttons {
    display: flex;
    gap: 0.5rem;
    margin-block-end: 1.5rem;
  }
`;

function Profile(props) {
  const {
    name,
    login,
    avatar_url,
    bio,
    followers,
    following,
    location,
    twitter_username,
    blog,
  } = props;

  return (
    <ProfileStyled>
      <img
        className="avatar"
        src={avatar_url}
        alt=""
        width="238"
        height="238"
      ></img>
      <p className="name">{name}</p>
      <p className="username">{login}</p>
      <div className="buttons">
        <Button text="Follow" link="#" />
        <Button
          text="Sponsor"
          icon={<Icon name="heart" size="24px" color="var(--pink)" />}
        />
      </div>

      <div className="bio info">{bio}</div>
      <p className="followers info">
        ° {followers} <span>followers</span> <span>°</span> {following}{" "}
        <span>following</span>
      </p>

      <p className="stars info">° 81</p>

      <p className="location info">° {location}</p>

      <a className="info" href={blog} target="_blank" rel="norefer">
        {blog}
      </a>
      <a
        className="info"
        href={`https://twitter.com/${twitter_username}`}
        rel="norefer"
      >
        @{twitter_username}
      </a>
    </ProfileStyled>
  );
}

export default Profile;
