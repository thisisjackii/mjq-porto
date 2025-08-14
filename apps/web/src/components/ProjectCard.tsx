import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/pages/projects';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group block rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 shadow-sm hover:shadow-lg dark:hover:bg-gray-800 transition-all duration-300 h-full">
        <div className="relative overflow-hidden rounded-t-xl">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={400}
            height={250}
            className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full dark:bg-blue-900/50 dark:text-blue-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}