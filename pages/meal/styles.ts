import styled from "styled-components";

export const Container = styled.div`
  img {
    width: 100%;
    height: 200px;
    border: 4px solid;
    border-image-source: linear-gradient(
      45deg,
      rgb(0, 143, 104),
      rgb(250, 224, 66)
    );
    border-image-slice: 1;
  }

  > h2 {
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;
