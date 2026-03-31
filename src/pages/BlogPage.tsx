import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts as posts } from "@/data/blogPosts";

const BlogPage = () => (
  <>
    <Helmet>
      <title>Insights — Claim Consultants | Insurance Claim Consultant Pakistan</title>
      <meta name="description" content="Practical guidance on industrial insurance claims — RCA, policy review, claim documentation, and negotiation. Written by qualified loss assessors in Pakistan." />
    </Helmet>

    <div className="pt-24 lg:pt-28">
      {/* Banner */}
      <div className="relative py-24 lg:py-32 overflow-hidden flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/Heroimage/pages/blog.png')` }}
        />
        <div className="absolute inset-0 bg-[#00338D]/45" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border-l-[5px] border-white pl-8"
          >
            <span className="text-blue-200 font-bold tracking-[0.18em] uppercase text-sm block mb-4">
              Knowledge & Insights
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              CLAIM INSIGHTS
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl max-w-2xl leading-relaxed font-medium">
              Practical guidance on industrial insurance claims — written by the engineers who handle them.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Posts Grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-gray-200 border border-gray-200">
            {posts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white p-8 lg:p-10 flex flex-col justify-between group hover:bg-[#f8fafc] transition-colors duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold text-[#2563eb] uppercase tracking-[0.18em]">
                      {post.tag}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h2 className="text-base font-extrabold text-[#0f172a] leading-snug mb-4 group-hover:text-[#00338D] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#64748b] text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-8 text-xs font-bold text-[#00338D] uppercase tracking-wider hover:underline"
                >
                  Read Article →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  </>
);

export default BlogPage;
