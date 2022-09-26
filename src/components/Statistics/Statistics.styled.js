import styled from 'styled-components';
export const StatWrapper = styled.section`
  text-align: center;
  background-color: #ffffff;
  margin-right: auto;
  margin-left: auto;
  width: 400px;
  height: auto;
`;

export const Title = styled.h2`
  color: #8694a1;
  padding-top: 20px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  // margin: 0;
  display: flex;
  color: #ffffff;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-basis: calc((100% - 0px) / 5);
  background: ${props => props.bgColor};
`;
