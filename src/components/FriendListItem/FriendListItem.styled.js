import styled from 'styled-components';
export const Status = styled.span`
  //   color: #000000;

  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${item => {
    return item.isOnline ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  border-radius: 8px;
  margin-right: 10px;
  margin-left: 10px;
  //
`;

export const Name = styled.p`
  font-weight: bold;
  margin: 0px;
`;
