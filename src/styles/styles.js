import styled from '@emotion/styled';

// Styled components can be further expanded to include props
export const BaseContainer = styled.div`
  font-family: Avenir, Helvetica;
  font-color: #171717;
  margin: 15px;
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledInput = styled.input`
  border-radius: 6px;
  font-size: 15px;
  height: 30px;
  width: 300px;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  display: block;
  max-height: 75vh;
  overflow-y: scroll;
  text-align: left;
  & > tbody > tr {
    &:nth-of-type(even) {
      background: #f9f6ee;
    }
    &:nth-of-type(odd) {
      background: #dcdcdc;
    }
    &:hover {
      color: #ff496c;
      cursor: pointer;
    }
    & > td {
      height: 40px;
      &:nth-of-type(1) {
        width: 40vw;
      }
      &:nth-of-type(n + 2) {
        width: 10vw;
      }
    }
  }
`;

export const StyledRowDetail = styled.div`
  background: #dcdcdc;
  border-radius: 6px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 35vh;
  padding: 15px;
  width: 25vw;
  & > div:nth-of-type(1) {
    cursor: pointer;
    font-size: 20px;
    text-align: right;
  }
  & > div:nth-of-type(2) {
    font-size: 24px;
  }
`;

export const VerticalBarrier = styled.div`
  border-left: 1px solid #171717;
  height: 75vh;
`;

export const VerticalSpacer = styled.div`
  height: 26px;
`;
