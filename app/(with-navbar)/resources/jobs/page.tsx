export default function JobsPage() {
  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp",
      location: "Bangalore, India",
      type: "Full-time",
      postedBy: "Rahul Sharma (Batch of 2015)",
      postedDate: "2 days ago",
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "Analytics Inc.",
      location: "Hyderabad, India",
      type: "Full-time",
      postedBy: "Priya Patel (Batch of 2017)",
      postedDate: "1 week ago",
    },
    {
      id: 3,
      title: "Product Manager",
      company: "InnovateTech",
      location: "Remote",
      type: "Full-time",
      postedBy: "Amit Kumar (Batch of 2014)",
      postedDate: "2 weeks ago",
    },
    {
      id: 4,
      title: "Frontend Developer Intern",
      company: "WebSolutions",
      location: "Bhopal, India",
      type: "Internship",
      postedBy: "Neha Gupta (Batch of 2019)",
      postedDate: "3 days ago",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Job Portal</h1>
      <p className="text-lg mb-8">
        Explore job opportunities shared by fellow alumni and partner companies. As an alumnus, you can also post job
        openings from your organization.
      </p>

      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Latest Opportunities</h2>
          <p className="text-gray-600 dark:text-gray-400">{jobs.length} jobs available</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Post a Job</button>
      </div>

      <div className="space-y-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{job.company}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 text-xs rounded">
                    {job.location}
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 text-xs rounded">
                    {job.type}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Posted {job.postedDate}</span>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">By {job.postedBy}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="text-blue-600 dark:text-blue-400 hover:underline">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
