import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return <main className="flex flex-col items-center mt-60 max-w-md mx-auto">
    <h4 className="text-3xl text-primary">There was an error...</h4>
  </main>
}
export default ErrorPage;