import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  PageWrapper,
  Title,
  Label,
  Input,
  StyledInlineErrorMessage,
  Submit,
  LoginBody,
} from "../../styles/login.pages.style";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("The email is incorrect")
    .required("Please enter your email"),
  password: Yup.string()
    .min(2, "Your password is too short")
    .required("Please enter your password"),
});

function FormikLoginForm(props) {
  const [formValues, setFormValues] = useState();
  return (
    <LoginBody>
      <PageWrapper>
        <Title>
          LOGIN
      </Title>

        <Formik
          {...props} validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            isSubmitting,
            isValidating,
            isValid
          }) => {
            return (
              <>
                <Form name="contact" method="post" onSubmit={handleSubmit}>

                  <Label htmlFor="email">
                    <Input
                      type="email"
                      name="email"
                      autoCapitalize="off"
                      autoCorrect="off"
                      autoComplete="email"
                      placeholder="email@email.com.br"
                      valid={touched.email && !errors.email}
                      error={touched.email && errors.email}
                    />
                  </Label>
                  <ErrorMessage name="email">
                    {msg => (
                      <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                    )}
                  </ErrorMessage>

                  <Label htmlFor="password">
                    <Input
                      type="password"
                      name="password"
                      autoCorrect="off"
                      autoComplete="password"
                      placeholder="**********"
                      valid={touched.password && !errors.password}
                      error={touched.password && errors.password}
                    />
                  </Label>
                  {errors.password && touched.password && (
                    <StyledInlineErrorMessage>
                      {errors.password}
                    </StyledInlineErrorMessage>
                  )}

                  <Submit type="submit" disabled={!isValid || isSubmitting}>
                    {isSubmitting ? `Submiting...` : `Submit`}
                  </Submit>
                </Form>

              </>
            );
          }}
        </Formik>
      </PageWrapper>
    </LoginBody>
  );
}

export default FormikLoginForm