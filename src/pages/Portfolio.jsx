import Navbar from "../components/Navbar";

function Portfolio() {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <section className="p-10 text-center">
        <h1 className="text-4xl font-bold">Hi, I’m {user.username}</h1>
        <p className="mt-2 text-lg">A passionate Web Developer 🚀</p>
        <a
          href="/resume.pdf"
          target="_blank"
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          View Resume
        </a>
      </section>

      {/* Skills */}
      <section className="p-10">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <li className="bg-gray-200 dark:bg-gray-700 p-4 rounded">React</li>
          <li className="bg-gray-200 dark:bg-gray-700 p-4 rounded">JavaScript</li>
          <li className="bg-gray-200 dark:bg-gray-700 p-4 rounded">Tailwind</li>
          <li className="bg-gray-200 dark:bg-gray-700 p-4 rounded">Node.js</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="p-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded p-4">
            <h3 className="font-bold">Project 1</h3>
            <p>A cool web app with React.</p>
            <a href="#" className="text-blue-600 hover:underline">
              View Demo
            </a>
          </div>
          <div className="border rounded p-4">
            <h3 className="font-bold">Project 2</h3>
            <p>Another amazing project.</p>
            <a href="#" className="text-blue-600 hover:underline">
              View Repo
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="p-10">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <form className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-3 p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-3 p-2 border rounded"
          />
          <textarea
            placeholder="Message"
            className="w-full mb-3 p-2 border rounded"
          />
          <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default Portfolio;
