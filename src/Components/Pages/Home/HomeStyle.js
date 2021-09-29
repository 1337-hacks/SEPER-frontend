import styled from "styled-components";

export const PageWrapper = styled.div`
  display: grid;
  place-content: center;
  height: 82vh;

  background-image: url('/testBackground.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const ContentContainer = styled.div`
  display: grid;
  place-content: center;
`;

export const PageHeader = styled.h2`
  color: #fff;
  font-size: 45px;
  font-weight: 800;
  text-transform: capitalize;
  margin-top: 15px;
  margin-bottom: 100px;
`;

export const DisplayButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: #8d99af;
  border: none;
  padding: 15px;
  color: #fff;
  font-size: 15px;
  border-radius: 7px;
`;