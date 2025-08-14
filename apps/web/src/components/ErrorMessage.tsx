type Props = {
  message: string;
};

export default function ErrorMessage({ message }: Readonly<Props>) {
  return (
    <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg relative" role="alert">
      <strong className="font-bold">Oops! Something went wrong.</strong>
      <span className="block sm:inline ml-2">{message}</span>
    </div>
  );
}