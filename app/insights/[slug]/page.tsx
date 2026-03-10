import { notFound } from "next/navigation";
import Link from "next/link";
import { INSIGHTS_POSTS } from "@/lib/insights";
import { PostCard } from "@/components/insights/PostCard";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return INSIGHTS_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default function InsightArticlePage({ params }: PageProps) {
  const post = INSIGHTS_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const otherPosts = INSIGHTS_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const renderContent = () => {
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let listKey = 0;

    post.content.forEach((item, index) => {
      if (item.type === "li") {
        currentList.push(item.value);
      } else {
        if (currentList.length > 0) {
          elements.push(
            <ul key={`list-${listKey++}`} className="space-y-2 mb-6">
              {currentList.map((li, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #892B87 0%, #E94258 50%, #F27224 100%)",
                    }}
                  />
                  <span className="text-white/70 leading-relaxed">{li}</span>
                </li>
              ))}
            </ul>
          );
          currentList = [];
        }

        if (item.type === "h2") {
          elements.push(
            <h2
              key={`h2-${index}`}
              className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4 first:mt-0"
            >
              <span className="relative inline-block">
                {item.value}
                <span
                  className="absolute -bottom-2 left-0 w-full h-1 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #892B87 0%, #E94258 50%, #F27224 100%)",
                    opacity: 0.3,
                  }}
                />
              </span>
            </h2>
          );
        } else if (item.type === "p") {
          elements.push(
            <p key={`p-${index}`} className="text-white/70 text-lg leading-relaxed mb-6">
              {item.value}
            </p>
          );
        }
      }
    });

    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${listKey}`} className="space-y-2 mb-6">
          {currentList.map((li, i) => (
            <li key={i} className="flex items-start gap-3">
              <div
                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #892B87 0%, #E94258 50%, #F27224 100%)",
                }}
              />
              <span className="text-white/70 leading-relaxed">{li}</span>
            </li>
          ))}
        </ul>
      );
    }

    return elements;
  };

  return (
    <main
      className="min-h-screen bg-[#060B18] relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at center, rgba(196,72,190,0.28) 0%, rgba(233,66,88,0.22) 22%, rgba(242,114,36,0.18) 36%, rgba(0,12,28,1) 100%)`,
        backgroundColor: "#060B18",
      }}
    >
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#892B87]/20 via-[#E94258]/10 to-[#F27224]/10 blur-[140px] rounded-full pointer-events-none" />

      <article className="relative pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>

          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(137, 43, 135, 0.2) 0%, rgba(233, 66, 88, 0.2) 50%, rgba(242, 114, 36, 0.2) 100%)",
              border: "1px solid rgba(233, 66, 88, 0.3)",
              color: "#E94258",
            }}
          >
            {post.category}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-white/50 mb-12 pb-8 border-b border-white/10">
            <span>{post.author}</span>
            <span>•</span>
            <span>
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <div className="prose prose-invert max-w-none">{renderContent()}</div>
        </div>
      </article>

      {otherPosts.length > 0 && (
        <section className="relative px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">More Insights</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherPosts.map((otherPost) => (
                <PostCard key={otherPost.slug} post={otherPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div
            className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(137, 43, 135, 0.15) 0%, rgba(233, 66, 88, 0.15) 50%, rgba(242, 114, 36, 0.15) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] blur-[100px] opacity-40"
              style={{
                background: "linear-gradient(135deg, #892B87 0%, #E94258 50%, #F27224 100%)",
              }}
            />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Operating a regulated ecosystem?
              </h2>
              <p className="text-white/60 mb-8 max-w-lg mx-auto text-lg">
                Let&apos;s design your infrastructure.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/services"
                  className="cp-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:brightness-110"
                  style={{
                    boxShadow: "0 8px 32px rgba(233, 66, 88, 0.35)",
                  }}
                >
                  Explore services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
                >
                  Contact Kenya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
