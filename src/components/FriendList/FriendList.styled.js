import styled from 'styled-components';
export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`;
export const Item = styled.li`
  width: 250px;
  height: auto;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
