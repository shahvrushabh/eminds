import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 30px;
  color: #5c7080;
  outline: none;
  border: none;
  padding: 5px 0 5px 10px;
  border-radius: 3px 3px 0 0;
  box-shadow: rgba(19, 124, 189, 0) 0px 0px 0px 0px,
    rgba(19, 124, 189, 0) 0px 0px 0px 0px,
    rgba(16, 22, 26, 0.15) 0px 0px 0px 1px inset,
    rgba(16, 22, 26, 0.2) 0px 1px 1px inset;
  vertical-align: middle;
  transition: box-shadow 0.1s cubic-bezier(0.4, 1, 0.75, 0.9) 0s;
  &:focus {
    box-shadow: rgba(92, 112, 128, 0.4) 0px 0px 0px 1px,
      rgba(191, 191, 191, 0.35) 0px 0px 0px 3px;
  }
`;

export const InputWrapper = styled.div`
  padding: 10px;
  width: 300px;
`;

export const Container = styled.div`
  border-radius: 0 0 3px 3px;
  box-shadow: rgba(92, 112, 128, 0.4) 0px 0px 0px 1px,
    rgba(191, 191, 191, 0.35) 0px 0px 0px 3px;
`;

export const ResultRow = styled.div`
  padding: 5px 10px;
  color: #5c7080;
  height: 30px;
  &:hover {
    background-color: #ebeef0;
  }
`;
