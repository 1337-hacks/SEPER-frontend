import styled from "styled-components";

export const PageWrapper = styled.div`
  display: inline-flex;
  height: 82vh;
`;

export const ContentContainer = styled.div`
  display: grid;
  place-content: center;
`;

export const SubmitSection = styled.section`
  display: grid;
  place-content: center;

  border: 1px;
  border-style: solid;
  border-color: black;
`;

export const Label = styled.label`
  font-size: 20px;
  color: black;
  font-family: sans-serif;
  padding-right: 10px;
`;

export const Input = styled.input`
  border-spacing: 10px;
`;

export const Form = styled.form`
  display: grid;
  align-content: center;
  text-align: center;
`;