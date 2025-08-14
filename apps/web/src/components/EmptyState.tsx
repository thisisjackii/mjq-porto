type Props = {
    message: string;
};

export default function EmptyState({ message }: Readonly<Props>) {
    return (
        <div className="text-center py-16 px-6 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">No Content Found</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">{message}</p>
        </div>
    );
}