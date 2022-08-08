import styled from '@emotion/styled';

export const ButtonStyle = styled.button`
  display: flex;
  max-width: 180px;
  margin: 0 auto;
  margin-top: 16px;
  padding: 8px 16px;
  border-radius: 50px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  background-image: linear-gradient(
    to bottom,
    #b46aec,
    #9e6cef,
    #856ef0,
    #686ff1,
    #4270f0
  );
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;

export const BtnTop = styled.button`
  position: fixed;
  z-index: 1;
  bottom: 50px;
  right: 50px;
  cursor: pointer;
  border-radius: 50px;
  padding: 10px 12px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  border: 0;
  background-image: linear-gradient(
    to bottom,
    #b46aec,
    #9e6cef,
    #856ef0,
    #686ff1,
    #4270f0
  );
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
