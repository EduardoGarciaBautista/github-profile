import { useState } from "react";
import styled from "styled-components";

const Avatar = styled.img`
  border: 10px solid orange;
  color: red;
  border: 1px solid red;
  
`;

function User({ name, avatar }) {
  const [newName, setNewName] = useState(name);
  const [counter, setCounter] = useState(0);

  let paragraph = `Mi nombre es: ${newName}`;

  function onClick() {
    setNewName(`Goku`);
    setCounter(counter + 1);
  }

  return (
    <div className="User" onClick={onClick}>
      <Avatar src={avatar} alt="" />
      <p>{paragraph}</p>
      <p>{`Se han dado ${counter} clicks`}</p>
    </div>
  );
}

export default User;
