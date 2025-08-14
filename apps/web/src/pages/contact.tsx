import { getApiBaseUrl } from '@/lib/api';
import { useState, FormEvent } from 'react';


const GithubIcon = () => (
    <img
        alt="GitHub"
        src={`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>GitHub</title><path fill='${typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "%23ffffff" : "%23212121"}' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/></svg>`}
        className="w-6 h-6"
    />
);

const LinkedInIcon = () => (
    <img
        alt="LinkedIn"
        src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>LinkedIn</title><path fill='%230A66C2' d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z'/></svg>"
        className="w-6 h-6"
    />
);

export default function ContactPage() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus('loading');

        const formData = new FormData(event.currentTarget);
        const submission = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string,
        };

        try {
            const response = await fetch(`${getApiBaseUrl()}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submission),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Something went wrong');
            }

            setStatus('success');
            setFeedbackMessage(result.message);
            (event.target as HTMLFormElement).reset();

        } catch (error: any) {
            setStatus('error');
            setFeedbackMessage(error.message || 'Failed to send message. Please try again later.');
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Get In Touch</h1>
                <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
                    Have a project in mind, or just want to say hi? I'd love to hear from you.
                </p>
            </div>

            <div className="mt-10 flex justify-center space-x-6">
                <a href="https://github.com/thisisjackii" target="_blank" rel="noopener noreferrer" title="GitHub Profile" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <GithubIcon />
                </a>
                <a href="https://linkedin.com/in/jackii" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <LinkedInIcon />
                </a>
            </div>

            <div className="mt-10">
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-800"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                        <input type="text" name="name" id="name" required className="block w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                        <input type="email" name="email" id="email" required className="block w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                        <textarea name="message" id="message" rows={5} required className="block w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your message..."></textarea>
                    </div>
                    <div>
                        <button type="submit" disabled={status === 'loading'} className="w-full py-3 px-5 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed">
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>

                {status === 'success' && <p className="mt-4 text-center text-green-600 dark:text-green-400">{feedbackMessage}</p>}
                {status === 'error' && <p className="mt-4 text-center text-red-600 dark:text-red-400">{feedbackMessage}</p>}
            </div>
        </div>
    );
}