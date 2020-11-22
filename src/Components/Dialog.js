import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import {Link} from 'react-router-dom';
const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-auto-columns: auto;
  margin-top:10px;
  row-gap: 16px;
  align-items: center;
`;

function Dialog({ title, children,_flag,onOption,logOut}) {
    if(_flag===1)
    {
    return (
    <DarkBackground>
      <DialogBlock>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
            <Link to="/account">
          <Button text="프로필 변경"/>
          </Link>
          <Button text = "로그아웃" onClick={logOut}/>
          <Button text="취소" onClick={onOption}/>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
    }
    else
    {
        return null;
    }
}

Dialog.defaultProps = {
  confirmText: '확인',
  cancelText: '취소'
};

export default Dialog;