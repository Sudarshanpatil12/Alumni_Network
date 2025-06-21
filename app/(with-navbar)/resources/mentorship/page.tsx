export default function MentorshipPage() {
  const mentors = [
    {
      id: 1,
      name: "Rajesh Verma",
      position: "CTO at TechSolutions",
      batch: "2005",
      expertise: ["Software Architecture", "Leadership", "Startups"],
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Sunita Patel",
      position: "Senior Manager at Google",
      batch: "2008",
      expertise: ["Machine Learning", "Career Growth", "Women in Tech"],
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Vikram Singh",
      position: "Founder & CEO at InnovateTech",
      batch: "2003",
      expertise: ["Entrepreneurship", "Product Strategy", "Fundraising"],
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Mentorship Program</h1>
      <p className="text-lg mb-8">
        Connect with experienced alumni who can guide you in your professional journey. Our mentorship program pairs
        recent graduates with established professionals for career guidance and support.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Program Benefits</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-1 rounded mr-3">✓</span>
              <span>One-on-one guidance from industry experts</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-1 rounded mr-3">✓</span>
              <span>Personalized career advice and planning</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-1 rounded mr-3">✓</span>
              <span>Networking opportunities with professionals</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-1 rounded mr-3">✓</span>
              <span>Skill development and knowledge sharing</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-1 rounded mr-3">✓</span>
              <span>Support during career transitions</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Join as a</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2">Mentee</h3>
              <p className="mb-4">Seeking guidance for your career journey?</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                Apply as Mentee
              </button>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2">Mentor</h3>
              <p className="mb-4">Want to give back to the community?</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full">
                Become a Mentor
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Featured Mentors</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img
                  src={mentor.image || "/placeholder.svg"}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{mentor.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{mentor.position}</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">Batch of {mentor.batch}</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Areas of Expertise:</h4>
              <div className="flex flex-wrap gap-2">
                {mentor.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 text-xs rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <button className="mt-4 text-blue-600 dark:text-blue-400 hover:underline w-full text-center">
              Request Mentorship
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
