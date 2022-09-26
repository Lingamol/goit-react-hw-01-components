import styled from 'styled-components';
export const Status = styled.span`
  //   color: #000000;

  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${p => {
    switch (p.Online) {
      case true:
        return '#21D100';
      case false:
        return '#FF0000';
      default:
        return '#FFA812';
    }
  }};
`;

export const Avatar = styled.img`
  border-radius: 8px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const Name = styled.p`
  font-weight: bold;
  margin: 0px;
`;
