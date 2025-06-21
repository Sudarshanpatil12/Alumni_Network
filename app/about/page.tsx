import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800 dark:text-blue-400">About SOIT</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Learn about the history, mission, and vision of SOIT, RGPV Bhopal.
        </p>
      </div>

      {/* History Section */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="School of Information Technology Campus"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our History</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              SOIT, RGPV Bhopal was established in 1986 as a premier technical institute in
              Madhya Pradesh. Over the decades, it has evolved into one of the most prestigious engineering colleges in
              central India, affiliated with Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV).
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The institute has consistently maintained high academic standards and has produced thousands of successful
              engineers and professionals who are making significant contributions across various industries globally.
              SOIT takes pride in its rich legacy of academic excellence and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mb-16 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To provide quality technical education and create competent professionals with high ethical standards and
              leadership qualities to serve the society and nation.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Impart quality education in engineering and technology</li>
              <li>Foster research and innovation</li>
              <li>Develop industry-ready professionals</li>
              <li>Promote ethical practices and social responsibility</li>
              <li>Establish strong industry-academia partnerships</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To be a center of excellence in technical education and research, producing globally competent
              professionals who contribute to the development of society and nation.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              SOIT RGPV envisions becoming a globally recognized institution known for its academic excellence,
              innovative research, and producing graduates who are not only technically competent but also socially
              responsible citizens committed to addressing the challenges of the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Departments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
            <h3 className="font-medium">Computer Science & Business Systems</h3>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
            <h3 className="font-medium">Artificial Intelligence & Machine Learning</h3>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
            <h3 className="font-medium">Computer Science & Data Science</h3>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
            <h3 className="font-medium">Cybersecurity</h3>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
            <h3 className="font-medium">Internet of Things & Applications</h3>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Information</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Alumni Cell</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-gray-700 dark:text-gray-300">
                    School of Information Technology, RGPV
                    <br />
                    Airport Road, Gandhi Nagar
                    <br />
                    Bhopal, Madhya Pradesh - 462033
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <p className="text-gray-700 dark:text-gray-300">+91 755 2678873</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <p className="text-gray-700 dark:text-gray-300">alumni.cell@soitrgpv.ac.in</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Training & Placement Cell</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Training & Placement Office
                    <br />
                    School of Information Technology, RGPV
                    <br />
                    Bhopal, Madhya Pradesh - 462033
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <p className="text-gray-700 dark:text-gray-300">+91 755 2678870</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <p className="text-gray-700 dark:text-gray-300">placement@soitrgpv.ac.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Website Link */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">Visit Official Website</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          For more information about SOIT RGPV, courses, admissions, and other details, please visit the official
          website.
        </p>
        <Button asChild>
          <a
            href="https://www.soitrgpv.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            Visit SOIT RGPV Website
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </section>
    </div>
  )
}
