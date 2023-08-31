import useAuthContex from "../../../hooks/useAuthContex";

const MyAccount = () => {
  const { user } = useAuthContex();
  return (
    <section className="my-account-page">
      <div className="my-account-container">
        <h2 className="text-3xl">Welcome, {user.displayName}</h2>
        <p className="mt-6">
          <strong>Email: </strong>
          {user?.email}
        </p>
      </div>
    </section>
  );
};

export default MyAccount;
