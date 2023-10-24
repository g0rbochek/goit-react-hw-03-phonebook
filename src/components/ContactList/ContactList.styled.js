import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  gap: 10px;
  li {
    font-weight: 500;

    button {
      width: max-content;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 5px;
      margin-left: 15px;
      margin-bottom: 5px;
      border: none;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2), 1px 1px 3px rgba(0, 0, 0, 0.2);

      &:hover {
        background: white;
        color: black;
      }

      &:active {
        background: white;
        color: green;
      }
    }
  }
`;
