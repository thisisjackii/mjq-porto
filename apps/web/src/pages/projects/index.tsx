import ProjectCard from '@/components/ProjectCard';
import ErrorMessage from '@/components/ErrorMessage';
import EmptyState from '@/components/EmptyState';
import { getApiBaseUrl } from '@/lib/api';

export type Project = {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
};

type Props = {
    projects: Project[];
    error?: string;
};

export default function ProjectsPage({ projects, error }: Readonly<Props>) {
    if (error) {
        return <ErrorMessage message={error} />;
    }

    return (
        <div>
            <h1 className="text-4xl font-bold mb-8">My Projects</h1>
            {projects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            ) : (
                <EmptyState message="There are currently no projects to display. Please check back later!" />
            )}
        </div>
    );
}

export async function getStaticProps() {
    try {
        const res = await fetch(`${getApiBaseUrl()}/api/projects`);
        if (!res.ok) {

            return {
                props: {
                    projects: [],
                    error: `Failed to fetch projects.The API returned a status of ${res.status}.`
                },
            };
        }
        const projects = await res.json();
        return {
            props: { projects },
            revalidate: 60,
        };
    } catch (error) {

        console.error("Failed to fetch projects:", error);
        return {
            props: {
                projects: [],
                error: "Could not connect to the backend API. Please make sure it's running."
            },
        };
    }
}