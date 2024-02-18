type SignInPageParams = {
  id: string;
};

const SignInPage = ({ params }: { params: SignInPageParams }) => {
  console.log("params", params);
  return (
    <div>
      <h1 className="text-7xl">Sign In</h1>
    </div>
  );
};

export default SignInPage;
