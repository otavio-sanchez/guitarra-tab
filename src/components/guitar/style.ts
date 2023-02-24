import styled from 'styled-components';

export const GuitarContent = styled.div`
  display: flex;
`;

export const Button = styled.button`
  width: 22px;
  height: 26px;
  top: 4px;
  left: 4px;
  position: absolute;
  z-index: 4;
  padding: 0px;
  border: 0px solid #fff;
  opacity: 0;
  cursor: pointer;
  border-radius: 2px;
  color: #fff;

  &:hover {
    transition: opacity 0.3s;
    opacity: 1 !important;
  }
`;

export const Mark = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  background-color: #ddd;
  position: absolute;
  top: -8px;
  left: 8px;
  z-index: 1;
  opacity: 0.7;
`;

export const TwoMark = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  background-color: #ddd;
  z-index: 1;
  opacity: 0.7;
  margin-bottom: 44px;
`;

export const MarksContainer = styled.div`
  position: absolute;
  left: 8px;
  top: -40px;
`;

export const Tuning = styled.div`
  width: 30px;
  height: 32px;
  display: block;
  line-height: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GuitarTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
`;

export const GuitarRow = styled.tr``;

export const GuitarColumn = styled.td`
  width: 30px;
  height: 30px;
  border-right: 4px solid #ccc;
  position: relative;

  &:first-child {
    border-left: 5px solid #ccc;
  }
`;

export const GuitarColumnText = styled.td`
  width: 30px;
  height: 30px;
  text-align: center;
`;

export const Line = styled.div`
  width: calc(100% + 4px);
  height: 2px;
  background-color: #333;
  margin: auto;
  z-index: 3;
  position: absolute;
  left: -1px;
`;
