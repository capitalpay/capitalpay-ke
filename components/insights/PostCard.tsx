import Link from "next/link";
import { InsightPost } from "@/lib/insights";

interface PostCardProps {
  post: InsightPost;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/insights/${post.slug}`}>
      <div className="group h-full bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10">
        {/* Category Pill */}
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4" style={{
          background: "linear-gradient(135deg, rgba(137, 43, 135, 0.2) 0%, rgba(233, 66, 88, 0.2) 50%, rgba(242, 114, 36, 0.2) 100%)",
          border: "1px solid rgba(233, 66, 88, 0.3)",
          color: "#E94258"
        }}>
          {post.category}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E94258] transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-white/40">
          <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
}
