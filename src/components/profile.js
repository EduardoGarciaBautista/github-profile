import styled from "styled-components";
import Icon from "../icon";
import Button from "./button";
import Card from "./card";

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
    color: var(--headline2-light);
    margin-block-end: 1.5rem;
  }

  .info {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font: var(--body2-semi-bold);
  }

  a:hover {
    text-decoration: underline;
  }

  .buttons {
    display: flex;
    gap: 0.5rem;
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
            <Card>
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
            </Card>


            <Card>
                <div className="bio info">{bio}</div>
                <p className="followers info">
                    ° {followers} <span>followers</span> <span>°</span> {following}{" "}
                    <span>following</span>
                </p>
            </Card>

            <Card>
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
            </Card>
        </ProfileStyled>
    );
}

export default Profile;
