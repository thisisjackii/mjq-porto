type TimelineEvent = {
    year: string;
    title: string;
    company: string;
    description: string;
};

type Props = {
    events: TimelineEvent[];
};

export default function Timeline({ events }: Readonly<Props>) {
    return (
        <div className="relative border-l-2 border-blue-500 dark:border-blue-400 ml-4">
            {events.map((event) => (
                <div key={`${event.year}-${event.title}`} className="mb-10 ml-8">
                    <span className="absolute -left-[11px] flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-400">
                        {/* You can put an icon here */}
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        {event.title}{' '}
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                            {event.year}
                        </span>
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                        {event.company}
                    </time>
                    <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                        {event.description}
                    </p>
                </div>
            ))}
        </div>
    );
}