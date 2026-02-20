const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold text-blue-shade">404</h1>
      <p className="mt-4 text-xl">Oops! The page you're looking for doesn't exist.</p>

      <button
        onClick={() => window.location.href = "/"}
        className="mt-6 bg-primary-orange text-white px-6 py-3 rounded"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;