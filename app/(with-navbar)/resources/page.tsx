export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Resources</h1>
      <p className="text-lg mb-8">
        Access valuable resources for UIT RGPV alumni, including career services, job opportunities, and mentorship
        programs.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-3">Career Services</h2>
          <p className="mb-4">Get guidance on career development, resume building, interview preparation, and more.</p>
          <a href="/resources/careers" className="text-blue-600 dark:text-blue-400 hover:underline">
            Learn more →
          </a>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-3">Job Portal</h2>
          <p className="mb-4">Explore job opportunities shared by fellow alumni and partner companies.</p>
          <a href="/resources/jobs" className="text-blue-600 dark:text-blue-400 hover:underline">
            View jobs →
          </a>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-3">Mentorship Program</h2>
          <p className="mb-4">Connect with experienced alumni who can guide you in your professional journey.</p>
          <a href="/resources/mentorship" className="text-blue-600 dark:text-blue-400 hover:underline">
            Join program →
          </a>
        </div>
      </div>
    </div>
  )
}
