import PageBanner from "../components/PageBanner";
import { blogs } from "../data/blogs";

export default function BlogPage() {
  return (
    <>
      <PageBanner title="Blog" />

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          {/* TITLE */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold">
              Solar <span className="text-brandPrimary">Blog</span>
            </h1>
            <p className="text-gray-600 mt-2">
              Insights, guides and tips about solar energy
            </p>
          </div>

          {/* BLOG GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {blogs.map((blog, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition border"
              >

                {/* IMAGE */}
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />

                {/* CONTENT */}
                <div className="p-6 text-center">

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-[#0B1F33] leading-snug">
                    {blog.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed text-justify">
                    {blog.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </>
  );
}