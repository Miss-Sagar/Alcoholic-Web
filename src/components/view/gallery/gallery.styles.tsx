import styled from "styled-components";

export const ScrollableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
  max-width: 1200px;
  padding: 30px 0px 10px 0px;
  margin: 10px auto;

  && {
    /* Style the scrollbar */
    &::-webkit-scrollbar {
      width: 12px;
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
      background-color: #f1f1f1;
      border-radius: 4px;
    }
  }
`;
