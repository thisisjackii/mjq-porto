import { useState } from 'react';
import SkillFilter from '@/components/SkillFilter';
import ErrorMessage from '@/components/ErrorMessage';
import EmptyState from '@/components/EmptyState';

type Skills = {
    languages: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
};

type Props = {
    skills: Skills;
    error?: string;
};

export default function SkillsPage({ skills, error }: Readonly<Props>) {
    const [filter, setFilter] = useState('All');

    if (error) {
        return <ErrorMessage message={error} />;
    }


    const hasSkills = skills && Object.values(skills).some(category => category.length > 0);

    const allSkills = hasSkills ? Object.values(skills).flat() : [];
    const categories = hasSkills ? ['All', ...Object.keys(skills)] : [];

    const getSkillsToDisplay = () => {
        if (!hasSkills || filter === 'All') return allSkills;
        return skills[filter.toLowerCase() as keyof Skills] || [];
    };

    const displayedSkills = getSkillsToDisplay();

    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">My Skills</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Here are some of the technologies I work with.
            </p>

            {hasSkills ? (
                <>
                    <SkillFilter categories={categories} activeFilter={filter} onFilterChange={setFilter} />
                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {displayedSkills.map((skill) => (
                            <div key={skill} className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-center shadow-sm">
                                <span className="font-medium">{skill}</span>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <EmptyState message="Skill data could not be loaded or is not available." />
            )}
        </div>
    );
}

export async function getStaticProps() {
    try {
        const res = await fetch('/api/skills');
        if (!res.ok) {
            return { props: { skills: {}, error: `Failed to fetch skills. API status: ${res.status}.` } };
        }
        const skills = await res.json();
        return { props: { skills }, revalidate: 3600 };
    } catch (error) {
        console.error("Failed to fetch skills:", error);
        return { props: { skills: {}, error: "Could not connect to the backend API." } };
    }
}