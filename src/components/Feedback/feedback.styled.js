import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid #000;

  border-radius: 5px;
  padding: 10px;
  width: 30%;
  cursor: pointer;
  &:hover {
    background: #182bc8;
    color: #fff;
  }
`;

export const DivAll = styled.div`
  border: 1px solid #000;
  background: rgb(240, 240, 240);
  width: 250px;
  font-size: 15px;
  text-align: center;
  margin: 50px auto;
  border-radius: 15px;
`;
