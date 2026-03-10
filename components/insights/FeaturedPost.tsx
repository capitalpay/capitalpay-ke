import Link from "next/link";
import { InsightPost } from "@/lib/insights";

interface FeaturedPostProps {
  post: InsightPost;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <Link href={`/insights/${post.slug}`}>
      <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/20 hover:border-white/30 transition-all duration-300 overflow-hidden">
        {/* Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#892B87]/20 via-[#E94258]/20 to-[#F27224]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></div>

        <div className="relative z-10">
          {/* Featured Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#892B87] via-[#E94258] to-[#F27224] text-white text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Featured
          </div>

          {/* Category */}
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4" style={{
            background: "linear-gradient(135deg, rgba(137, 43, 135, 0.2) 0%, rgba(233, 66, 88, 0.2) 50%, rgba(242, 114, 36, 0.2) 100%)",
            border: "1px solid rgba(233, 66, 88, 0.3)",
            color: "#E94258"
          }}>
            {post.category}
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#E94258] transition-colors">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-2xl">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-white/50">
            <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
