import styled from 'styled-components';

export const Button = styled.button`
flex-direction: column;
  padding: 10px 20px;
  background-color: #d77df8;
  color: white;
  text-align: center;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &: hover{
    background-color: #ca7ae7;
  }
`

export const Container = styled.div`
    display: flex;
    gap: 10px;
`