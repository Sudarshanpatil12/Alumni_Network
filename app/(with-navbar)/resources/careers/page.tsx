export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Career Services</h1>
      <p className="text-lg mb-8">
        UIT RGPV Alumni Network offers comprehensive career services to help alumni advance in their professional
        journey.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Services Offered</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-1 rounded mr-3">✓</span>
              <span>Resume and CV review by industry experts</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-1 rounded mr-3">✓</span>
              <span>Mock interviews and feedback sessions</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-1 rounded mr-3">✓</span>
              <span>Career counseling and guidance</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-1 rounded mr-3">✓</span>
              <span>Skill development workshops</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-1 rounded mr-3">✓</span>
              <span>Networking events with industry professionals</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Request Career Assistance</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input type="text" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Service Needed</label>
              <select className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600">
                <option>Resume Review</option>
                <option>Mock Interview</option>
                <option>Career Counseling</option>
                <option>Skill Development</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" rows={4}></textarea>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit Request</button>
          </form>
        </div>
      </div>
    </div>
  )
}
