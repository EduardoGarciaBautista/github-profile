import React, {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import Overlay from "./overlay";
import styled from "styled-components";
import {ButtonContrast} from "./button";
import InputTextStyled from "./input-text";
import ReactDom from "react-dom";

const modalRoot = document.getElementById('portal');

const ModalContentStyled = styled.form`
  position: fixed;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  transform: translate(-50%, -50%);
  background: var(--bg);
  color: var(--white);
  padding: 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  inline-size: 24rem;

  .title {
    font: var(--headline2-semi-bold);
    margin: 0;
  }
`;

function ModalContent({setIsActive}) {
    const form = useRef(null);
    const navigator = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        setIsActive(false);
        navigator(`/${formData.get('userName')}`);
    }
    return (
        <Overlay>
            <ModalContentStyled ref={form} onSubmit={handleSubmit}>
                <h2 className="title">Search anu user</h2>
                <InputTextStyled name="userName" type="text" placeholder="User Name" autoComplete="off"/>
                <ButtonContrast text="Search" type="submit"/>
            </ModalContentStyled>
        </Overlay>
    )
}

class ModalPortal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDom.createPortal(this.props.children, this.el)
    }
}

export default function Modal({isActive, setIsActive}) {
    if (!isActive) {
        return null;
    }
    return (
        <ModalPortal>
            <ModalContent setIsActive={setIsActive}/>
        </ModalPortal>
    )
};