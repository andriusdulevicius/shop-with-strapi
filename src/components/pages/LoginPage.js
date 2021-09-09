import Layout from './../Layout/Layout';
import LoginForm from './../LoginForm/LoginForm';
const LoginPage = () => {
  return (
    <Layout page='login'>
      <section className='container'>
        <LoginForm />
      </section>
    </Layout>
  );
};

export default LoginPage;
