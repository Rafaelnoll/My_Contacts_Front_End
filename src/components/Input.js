import styled from 'styled-components';

export default styled.input`
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 10px 0px #0000000A;
  border: 2px solid #fff;
  height: 52px;
  border-radius: 4px;
  padding: 16px;
  font-size: 16px;
  margin-bottom: 16px;
  outline: 0;
  transition: border-color 0.2s ease-in;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;