import React, { useState } from "react";

// Importing Loading Spinner
import Loader from "react-loader-spinner";
// Import validator for adding validations

import validator from 'validator';
  
// Importing Styled Components
import {
  Container,
  InformationContainer,
  FormContainer,
  H1,
  P,
  Label,
  Input,
  InputContainer,
  Textarea,
  ContactButton,
  ErrorMessage
} from "./Styles";

import "./App.css";

const App = () => {
  // State
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState(false)
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [visible, setVisible] = useState(false);
  const description = `Hey, If your facing any problems while using our services. Please the contact form, our team will contact you and we will try our best to solve your problem. Good Day`;

  const emailValidator = (e) => {
    if (validator.isEmail(e)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
 // Submit Event
 const submitEventHandler = () => {
  emailValidator(email);

  if (emailError) {
    setLoadingSpinner(true);

    setTimeout(() => {
      setLoadingSpinner(false);
      setVisible(true);
    }, 6000);
    setVisible(false);
  } else {
    console.log(emailError);
    return;
  }
};
  //Reset
  const resetEventHandler = () => {
    setVisible(false);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="App">
      <Container>
        <InformationContainer>
          <H1>{visible ? "Details" : "Help & Support"}</H1>
          <P>{visible ? null : description}</P>

          {visible && (
            <>
              <P>Name: {name}</P>
              <P>Email: {email}</P>
              <P>Message: {message}</P>
            </>
          )}
        </InformationContainer>
        <FormContainer>
          <H1>Contact Form</H1>

          <div className="form">
            <InputContainer>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                value={name}
                disabled={loadingSpinner}
                onChange={(e) => setName(e.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                value={email}
                disabled={loadingSpinner}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputContainer>
            {emailError ? (
              <ErrorMessage>Please Enter a valid email</ErrorMessage>
            ) : null}
            <InputContainer>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={message}
                disabled={loadingSpinner}
                onChange={(e) => setMessage(e.target.value)}
              />
            </InputContainer>
          </div>

          {visible ? (
            <ContactButton onClick={resetEventHandler}>Reset</ContactButton>
          ) : (
            <ContactButton onClick={submitEventHandler}>
              {loadingSpinner ? (
                <Loader type="TailSpin" color="#fff" height={20} width={30} />
              ) : (
                "Contact"
              )}
            </ContactButton>
          )}
        </FormContainer>
      </Container>
    </div>
  );
};

export default App;
