import Header from "../components/Header/Header";
import RobotForm from "../components/RobotForm/RobotForm";

const FormPage = () => {
  return (
    <>
      <Header />
      <main className="container">
        <h2>Create your robot</h2>
        <RobotForm />
      </main>
    </>
  );
};

export default FormPage;
