export default function ResumePage() {
    const baseUrl = process.env.NEXT_PUBLIC_RESUME_URL;

    const resumeUrl = baseUrl ? baseUrl.replace('export=view', 'export=view') : '';
    const downloadUrl = baseUrl ? baseUrl.replace('export=view', 'export=download') : '';
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold">My Resume</h1>
                <a
                    href={downloadUrl}
                    download="MyResume.pdf"
                    className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
                >
                    Download PDF
                </a>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-lg">
                <iframe
                    src={resumeUrl}
                    className="w-full h-[80vh]"
                    title="My Resume"
                ></iframe>
            </div>
        </div>
    );
}