import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  margin-top: 19%;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

export const InformationContainer = styled.div`
  background-color: #3786bd;
  color: #fff;
  padding: 1.25rem 2.5rem;
  height: 350px;
  width: 45%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  @media screen and (max-width: 600px) {
    width: 500px;
    height: 230px;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 10px;
  }
`;

export const FormContainer = styled.div`
  background-color: #fff;
  width: 500px;
  color: #3786bd;
  padding: 1.25rem 2.5rem;
  height: 350px;
  border: 1px solid #3786bd;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  @media screen and (max-width: 600px) {
    border-bottom-right-radius: 0px;
    border-top-left-radius: 10px;
    height: 400px;
  }
`;

export const H1 = styled.h1`
  font-weight: 600;
  text-transform: uppercase;
`;

export const P = styled.p`
  font-weight: 300;
  font-size: 15px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Label = styled.label`
  font-weight: 400;
  display: block;
  font-size: 15px;
  color: #666;
  width: 30%;
  @media screen and (max-width: 600px) {
    text-align: left;
  }
`;

export const Input = styled.input`
  font-weight: 300;
  display: block;
  width: 60%;
  padding: 0.5rem 1rem;
  font-size: 15px;
  outline: none;
  border: 1px solid #e5e5e5;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;

  &:focus {
    border: 1px solid #3786bd;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Textarea = styled.textarea`
  font-weight: 300;
  display: block;
  width: 60%;
  padding: 0.5rem 1rem;
  font-size: 15px;
  outline: none;
  border: 1px solid #e5e5e5;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;

  &:focus {
    border: 1px solid #3786bd;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ContactButton = styled.p`
  display: block;
  padding: 0.75rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #3786bd;
  color: #fff;
  border: none;
  cursor: pointer;
  word-spacing: 35px;
  text-align: center;

  &:hover {
    background-color: #389ce4;
  }
`;
export const ErrorMessage = styled.span`
  color: red;
  margin-top: -10px;
  margin-bottom: 5px;
  margin-left: 160px;
`;
