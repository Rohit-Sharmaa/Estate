export default function About() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold bg-slate-200 py-2 px-4 rounded-lg text-gray-900 mb-4">
          Share Your Space
        </h2>
        <p className="text-xl bg-slate-200 py-2 px-4 rounded-lg text-gray-900 mb-6">
          Find Your Room Partner
        </p>
        <p className="text-lg bg-slate-100 py-4 px-6 rounded-lg text-gray-800 mb-8">
          Whether you have an extra room to rent or need a room partner to share
          your space, we have got you covered. Join us and make finding the
          perfect living arrangement easy and hassle-free!
        </p>

        {/* Image Section */}
        <div className="flex justify-center mb-8">
          <img
            src="https://cdn.pixabay.com/photo/2021/10/07/15/23/real-estate-6688945_1280.jpg"
            alt="Finding Room Partner"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold bg-slate-200 py-2 px-4 rounded-lg text-gray-900 mb-4">
            Why Choose Us?
          </h3>
          <ul className="list-disc list-inside text-gray-800 mb-6">
            <li className="mb-2">
              <strong>Wide Range of Options:</strong> Browse through a variety
              of available rooms and find the perfect match.
            </li>
            <li className="mb-2">
              <strong>Easy Process:</strong> Our user-friendly platform makes it
              simple to list your room or find a partner.
            </li>
            <li className="mb-2">
              <strong>Safe and Secure:</strong> We ensure that all listings and
              user profiles are verified to provide a secure experience.
            </li>
            <li className="mb-2">
              <strong>Affordable Solutions:</strong> Find cost-effective options
              that suit your budget and preferences.
            </li>
          </ul>
          <p className="text-gray-800 mb-6">
            Our mission is to make the process of finding and sharing a room as
            smooth as possible. We are dedicated to providing a seamless
            experience for both room owners and seekers. Start exploring now and
            find your perfect space!
          </p>

          {/* Another Image Section */}
          <div className="flex justify-center">
            <img
              src="https://cdn.pixabay.com/photo/2024/04/23/16/14/ai-generated-8715598_1280.jpg"
              alt="Happy Roommates"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
