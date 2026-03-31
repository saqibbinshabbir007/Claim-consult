import { Helmet } from "react-helmet-async";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft } from "lucide-react";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const currentIndex = blogPosts.indexOf(post);
  const prev = blogPosts[currentIndex - 1] ?? null;
  const next = blogPosts[currentIndex + 1] ?? null;

  return (
    <>
      <Helmet>
        <title>{post.title} — Claim Consultants</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="pt-20 lg:pt-24">
        {/* Banner */}
        <div className="relative bg-[#00338D] py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-blue-200 text-sm font-semibold mb-8 hover:text-white transition-colors"
              >
                <ArrowLeft size={15} /> Back to Insights
              </Link>
              <div className="flex items-center gap-4 mb-5">
                <span className="text-xs font-bold text-blue-300 uppercase tracking-[0.2em]">
                  {post.tag}
                </span>
                <span className="text-blue-400 text-xs">·</span>
                <span className="text-blue-300 text-xs">{post.date}</span>
                <span className="text-blue-400 text-xs">·</span>
                <span className="text-blue-300 text-xs">{post.readTime}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                {post.title}
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Article Body */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16">

              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:w-2/3"
              >
                {/* Excerpt */}
                <p className="text-[#2563eb] text-base font-semibold leading-relaxed mb-10 border-l-4 border-[#2563eb] pl-5">
                  {post.excerpt}
                </p>

                {/* Sections */}
                <div className="space-y-10">
                  {post.sections.map((section, i) => (
                    <div key={i}>
                      <h2 className="text-lg font-extrabold text-[#0f172a] uppercase tracking-wide mb-3">
                        {section.heading}
                      </h2>
                      <p className="text-[#475569] text-sm leading-relaxed">
                        {section.body}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-14 bg-[#00338D] p-8 lg:p-10">
                  <h3 className="text-white font-extrabold text-lg mb-2">
                    Need help with a claim?
                  </h3>
                  <p className="text-blue-200 text-sm leading-relaxed mb-6">
                    Contact us for a confidential initial consultation. We will review your case and advise on the best course of action — at no obligation.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-white text-[#00338D] font-bold text-sm px-6 py-3 uppercase tracking-widest hover:bg-blue-50 transition-colors"
                  >
                    Book Free Consultation
                  </Link>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:w-1/3 space-y-8"
              >
                <div className="border border-gray-200 p-6">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-5">
                    More Articles
                  </h4>
                  <div className="space-y-4">
                    {blogPosts
                      .filter((p) => p.slug !== post.slug)
                      .slice(0, 4)
                      .map((p) => (
                        <Link
                          key={p.slug}
                          to={`/blog/${p.slug}`}
                          className="block group"
                        >
                          <span className="text-xs font-bold text-[#2563eb] uppercase tracking-wider block mb-1">
                            {p.tag}
                          </span>
                          <span className="text-sm font-semibold text-[#0f172a] leading-snug group-hover:text-[#00338D] transition-colors">
                            {p.title}
                          </span>
                        </Link>
                      ))}
                  </div>
                </div>

                <div className="bg-[#f8fafc] border border-gray-200 p-6">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
                    About Claim Consultants
                  </h4>
                  <p className="text-[#64748b] text-xs leading-relaxed">
                    We are Pakistan's dedicated industrial loss assessing firm. B.E qualified engineers with experience across textile, power, and pharmaceutical sectors — working exclusively for the insured.
                  </p>
                  <Link
                    to="/about"
                    className="mt-4 inline-block text-xs font-bold text-[#00338D] hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.aside>

            </div>
          </div>
        </section>

        {/* Prev / Next Navigation */}
        <section className="border-t border-gray-100 bg-[#f8fafc] py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between gap-6">
            {prev ? (
              <Link
                to={`/blog/${prev.slug}`}
                className="group flex flex-col max-w-xs"
              >
                <span className="text-xs text-gray-400 uppercase tracking-widest mb-1">← Previous</span>
                <span className="text-sm font-bold text-[#0f172a] group-hover:text-[#00338D] transition-colors leading-snug">
                  {prev.title}
                </span>
              </Link>
            ) : <div />}
            {next ? (
              <Link
                to={`/blog/${next.slug}`}
                className="group flex flex-col max-w-xs text-right"
              >
                <span className="text-xs text-gray-400 uppercase tracking-widest mb-1">Next →</span>
                <span className="text-sm font-bold text-[#0f172a] group-hover:text-[#00338D] transition-colors leading-snug">
                  {next.title}
                </span>
              </Link>
            ) : <div />}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPostPage;
