import Timeline from '@/components/Timeline';

const timelineData = [
    {
        year: '2023',
        title: 'Senior Full-Stack Engineer',
        company: 'Tech Innovations Inc.',
        description: 'Led development of a new SaaS platform using Next.js and NestJS, improving performance by 30%.',
    },
    {
        year: '2020',
        title: 'Mid-Level Software Engineer',
        company: 'Digital Solutions Co.',
        description: 'Developed and maintained client-side applications with React and server-side APIs with Node.js.',
    },
    {
        year: '2018',
        title: 'Junior Developer',
        company: 'Web Starters LLC',
        description: 'Assisted in building responsive websites and content management systems.',
    },
    {
        year: '2017',
        title: 'Graduated University',
        company: 'University of Technology',
        description: 'Bachelor of Science in Computer Science.',
    },
];

export default function AboutPage() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">
                I am a passionate full-stack engineer with a love for creating elegant and efficient solutions. My journey in tech has been driven by a constant desire to learn and build. Here's a brief look at my career path.
            </p>
            <Timeline events={timelineData} />
        </div>
    );
}