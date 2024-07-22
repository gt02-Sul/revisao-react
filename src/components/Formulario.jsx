import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Button, Alert } from 'react-bootstrap';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Seu nome está certo?')
    .max(50, 'Seu nome está certo?')
    .required('Nome é obrigatório!'),
  lastName: Yup.string()
    .min(2, 'Seu sobrenome está certo?')
    .max(50, 'Seu sobrenome está certo?')
    .required('Sobrenome é obrigatório!'),
  email: Yup.string()
    .email('E-mail inválido!')
    .required('E-mail é obrigatório!'),
  password: Yup.string()
    .min(8, 'Senha deve ter no mínimo 8 caracteres')
    .required('Senha é obrigatória!'),
});

export default function Formulario() {
  return (
    <div className="my-5">
      <Container>
        <h1>Signup Form</h1>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              resetForm();
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="firstName">Nome</label>
                <Field
                  type="text"
                  name="firstName"
                  className="form-control"
                />
                <ErrorMessage
                  name="firstName"
                  component={Alert}
                  variant="danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Sobrenome</label>
                <Field
                  type="text"
                  name="lastName"
                  className="form-control"
                />
                <ErrorMessage
                  name="lastName"
                  component={Alert}
                  variant="danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                />
                <ErrorMessage
                  name="email"
                  component={Alert}
                  variant="danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Senha</label>
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                />
                <ErrorMessage
                  name="password"
                  component={Alert}
                  variant="danger"
                />
              </div>
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                Cadastrar
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};
