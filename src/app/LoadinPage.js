const LoadingPage = () => {
  return (
    <div className="h-screen w-screen bg-coolGray-700 ">
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-violet-500"></div>
      </div>
    </div>
  );
};

export default LoadingPage;