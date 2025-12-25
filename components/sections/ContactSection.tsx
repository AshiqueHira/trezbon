export function ContactSection() {
  return (
    <section className="w-full py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-medium text-black mb-2">
          Get in touch with us.
        </h2>
        <p className="text-gray-600 mb-12 max-w-xl">
          We offer expert consulting services tailored to your needs. We'll get
          back to you within 24 hours!
        </p>

        {/* Form */}
        <form className="space-y-8">
          {/* Grid fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">E-mail</label>
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Contact Number
              </label>
              <input
                type="text"
                placeholder="IND"
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Are you an Individual or agency?
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows={6}
              placeholder="Leave us a message..."
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Privacy */}
          <div className="flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-sm text-gray-600">
              You agree to our friendly{" "}
              <span className="underline cursor-pointer">privacy policy</span>.
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-8 py-3 text-sm font-medium text-white hover:bg-indigo-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
