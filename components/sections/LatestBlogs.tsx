import Image from "next/image";
import Link from "next/link";

export function LatestBlogs() {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-medium text-black ">
            Trezbon Latest Blogs
          </h2>
          <Link
            href="#"
            className="text-sm font-medium text-indigo-500 border border-indigo-500 rounded-md px-4 py-2 hover:bg-indigo-50"
          >
            View more
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title:
                "Choosing The Right Networking Solution is Essential For All Success",
              desc: "This paper explores the critical role of networking solutions in the functionality of applications",
              img: "/images/network.jpg",
            },
            {
              title: "Removing Directory Numbers Using Python",
              desc: "This article delves into the details of how using Python can remove multiple directory numbers from CUCM",
              img: "/images/python.jpg",
            },
            {
              title: "Cloud Contact Center Solution from AWS",
              desc: "This blog looks at how customers are benefiting by using Amazon Connect services",
              img: "/images/devops.jpg",
            },
          ].map((blog, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white"
            >
              <Image
                src={blog.img}
                alt={blog.title}
                width={400}
                height={220}
                className="w-full h-[200px] object-cover"
              />

              <div className="p-5">
                <h3 className="text-sm font-medium text-black mb-3 leading-snug">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {blog.desc}
                </p>

                <Link
                  href="#"
                  className="text-sm text-indigo-500 hover:underline"
                >
                  Read full article
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
