const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white/70 z-50">
      <div className="w-10 h-10 border-4 border-[#275AEC] border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default LoadingSpinner;
