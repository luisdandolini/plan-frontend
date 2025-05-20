export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-orange-500 border-t-transparent" />
      <span className="ml-4 text-white font-medium">Carregando países...</span>
    </div>
  );
}
