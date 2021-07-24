import styled from "styled-components/macro";

export const Container = styled.form``;

export const FormGroup = styled.div`
  width: 100%;
  margin: 10px 0px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 18px 9px;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  resize: none;
  font-size: 1rem;
  background: #f6f8fd;
  box-shadow: none;
  border: 1px solid #edf0f9;
  color: var(--bs-secondary);
`;

export const Option = styled.option`
  text-transform: capitalize;
  padding: 16px;
`;

export const Input = styled.input.attrs({ type: "text" })`
  width: 100%;
  padding: 18px 9px;
  outline: none;
  border-radius: 2px;
  cursor: pointer;
  resize: none;
  font-size: 1rem;
  background: white;
  box-shadow: none;
  border: 1px solid #edf0f9;
  color: var(--bs-secondary);

  ::placeholder,
  ::-webkit-input-placeholder {
    color: grey;
    font-family: "Mulish", sans-serif;
  }
  :-ms-input-placeholder {
    color: grey;
    font-family: "Mulish", sans-serif;
  }
`;

export const RangeInput = styled.input`
  display: block;
  width: 100%;
`;

export const SubmitInput = styled.input.attrs({
  type: "submit",
})`
  width: 50%;
  display: block;
  outline: none;
  border-radius: 2px;
  border: none;
  background-color: var(--bs-primary);
  padding: 12px 8px;
  color: var(--bs-white);
  cursor: pointer;
  font-size: 1.2rem;
  opacity: 1;
  box-shadow: var(--primary-box-shadow);
  border: 1px solid var(--bs-blue);
  transition: all var(--primary-transition-time);
  &:hover {
    background-color: var(--bs-white);
    color: var(--bs-blue);
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: var(--bs-blue);
  display: inline-block;
  font-weight: 500;
  width: 100%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 18px 9px;
  outline: none;
  border-radius: 2px;
  cursor: pointer;
  resize: none;
  font-size: 1rem;
  background: white;
  box-shadow: none;
  border: 1px solid #edf0f9;
  color: var(--bs-secondary);
  ::placeholder,
  ::-webkit-input-placeholder {
    color: grey;
    font-family: "Mulish", sans-serif;
  }
  :-ms-input-placeholder {
    font-family: "Mulish", sans-serif;
  }
`;

export const Span = styled.span`
  margin: 8px 0px;
  color: black;
  display: inline-block;
  font-weight: bold;
  font-size: 0.9rem;
`;
