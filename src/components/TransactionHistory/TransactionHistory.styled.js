import styled from 'styled-components';
export const Table = styled.table`
  margin-right: auto;
  margin-left: auto;
  width: 600px;
  height: auto;
  text-align: center;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;
export const Thead = styled.thead`
  background-color: #00bcd5;
  color: #ffffff;
  //   border: 1px solid #8effff;
  //   #ECF1F4
`;
export const Tr = styled.tr`
  //   border: 5px solid #8effff;
`;
export const Th = styled.th`
  border: 2px solid #8effff;
  padding: 5px;
`;

export const TrRow = styled.tr`
  background-color: #ffffff;
  &:nth-child(2n) {
    background-color: #e4e4e4;
  }
`;
//   border: 5px solid #8effff;
