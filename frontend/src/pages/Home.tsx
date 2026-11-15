import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200 px-4">
      <div className="rounded-3xl bg-blue-200  h-80 w-200 text-center shadow-md p-20">
        <h1 className="text-3xl font-bold text-black">Welcome</h1>

        <h2 className="mt-3 text-lg text-black">Hostel Gate Pass System</h2>

        <button
          className="mt-6 rounded-lg bg-gray-500 px-6 py-2 text-white transition hover:bg-gray-600"
          onClick={() => navigate("/login")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;