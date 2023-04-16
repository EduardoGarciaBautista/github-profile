import styled from "styled-components";
import Icon from "../icon";
import Index from "../icon";
import Button from "./button";
import Neumorphism from "./neumorphism";

const ProfileStyled = styled.div`
  grid-area: profile;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .avatar {
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid var(--grey-1);
    box-sizing: border-box;
    margin-block-end: 1.5rem;
  }

  .name {
    font: var(--headline1);
    margin: 0;
    margin-block-end: 0.5rem;
  }

  .username {
    margin-block: 0.5rem;
    margin-block-end: 1.5rem;
  }

  .info {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font: var(--body2-semi-bold);
  }

  .blog, .twitter {
    color: var(--grey);
    margin: 14px 0;
  }

  a:hover {
    text-decoration: underline;
  }

  .buttons {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  }

  @media (max-width: 576px) {
    .avatar {
      width: 120px;
      height: 120px;
      margin-block-end: .5rem;
    }
    .username {
      margin-block-end: 1rem;
    }
    .info {
      margin: 5px 0;
    }
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
            <Neumorphism>
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
                    <Button text="Follow" link="#"/>
                    <Button
                        text="Sponsor"
                        icon={<Icon name="heart" size="24px" color="var(--pink)"/>}
                    />
                </div>
            </Neumorphism>


            <Neumorphism>
                <div className="bio info">{bio}</div>
                <p className="followers info">
                    {<Index name="heart" color="#5E454B"/>} {followers} <span>followers</span> {<Index name="heart"
                                                                                                       color="var(--grey)"/>} {following}{" "}
                    <span>following</span>
                </p>
            </Neumorphism>

            <Neumorphism>
                <p className="stars info">{<Index name="star"/>} 81</p>

                <p className="location info">
                    {<Index name="location"/>} {location}
                </p>

                <a className="blog info" href={blog} target="_blank" rel="norefer">
                    {<Index name="link"/>} {blog}
                </a>
                <a
                    className="twitter info"
                    href={`https://twitter.com/${twitter_username}`}
                    rel="norefer"
                >
                    {<Index name="twitter"/>} @{twitter_username}
                </a>
            </Neumorphism>
        </ProfileStyled>
    );
}

export default Profile;
