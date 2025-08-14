type Props = {
    categories: string[];
    activeFilter: string;
    onFilterChange: (filter: string) => void;
};

export default function SkillFilter({
    categories,
    activeFilter,
    onFilterChange,
}: Readonly<Props>) {
    return (
        <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onFilterChange(category)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeFilter === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                        }`}
                >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
            ))}
        </div>
    );
}