"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { INSIGHTS_POSTS } from "@/lib/insights";
import { PostCard } from "@/components/insights/PostCard";
import { FeaturedPost } from "@/components/insights/FeaturedPost";
import { CategoryChips } from "@/components/insights/CategoryChips";
import { Search, Play, ArrowRight } from "lucide-react";

const YOUTUBE_VIDEO_URL = "https://youtu.be/Lp0yqmYVkY4?si=1Nv0TXMS-lKiDXu_";
const STANDARD_ARTICLE_URL =
  "https://www.standardmedia.co.ke/business/article/2001531651/freighters-lobby-in-sh10b-deal-to-digitise-logistics-sector";

export default function InsightsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredPost = useMemo(() => INSIGHTS_POSTS.find(post => post.featured), []);

  const filteredPosts = useMemo(() => {
    return INSIGHTS_POSTS.filter(post => {
      if (post.featured) return false;
      if (selectedCategory !== "All" && post.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [searchQuery, selectedCategory]);

  const youtubeVideoId = (() => {
    try {
      const url = new URL(YOUTUBE_VIDEO_URL);
      if (url.hostname.includes("youtu.be")) return url.pathname.slice(1).split("?")[0];
      return url.searchParams.get("v") || "";
    } catch {
      return "";
    }
  })();

  return (
    <main
      className="min-h-screen bg-[#060B18] relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at center, rgba(196,72,190,0.28) 0%, rgba(233,66,88,0.22) 22%, rgba(242,114,36,0.18) 36%, rgba(0,12,28,1) 100%)`,
        backgroundColor: "#060B18",
      }}
    >
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#892B87]/20 via-[#E94258]/10 to-[#F27224]/10 blur-[140px] rounded-full pointer-events-none" />

      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Systems & infrastructure insights
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Trade corridor digitisation. Clearing & forwarding. Public revenue structuring. Reconciliation design.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            <CategoryChips
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </div>
      </section>

      {/* Featured Media Cards */}
      <section className="relative px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 — YouTube feature */}
            <a
              href={YOUTUBE_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <div className="h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10">
                <div className="relative aspect-video bg-gray-900">
                  <img
                    src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
                    alt="CapitalPay Kenya — In Action"
                    className="w-full h-full rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-[#E94258] ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 bg-gradient-to-r from-[#892B87]/20 to-[#E94258]/20 border border-[#E94258]/30 text-[#E94258]">
                    Video
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E94258] transition-colors">
                    CapitalPay Kenya — In Action
                  </h3>
                  <div className="text-sm font-semibold text-[#E94258] group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                    Watch Now
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>

            {/* Card 3 — Standard article */}
            <a
              href={STANDARD_ARTICLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <div className="h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10">
                <div className="relative aspect-video bg-gray-900">
                  <img
                    src="/images/kifwa-signing-ceremony.png"
                    alt="KIFWA and CapitalPay signing ceremony at JW Marriott, Nairobi"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 bg-gradient-to-r from-[#892B87]/20 to-[#E94258]/20 border border-[#E94258]/30 text-[#E94258]">
                    Press
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E94258] transition-colors line-clamp-2">
                    Freighters lobby in Sh10b deal to digitise logistics sector
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2">
                    KIFWA signs long-term partnership with Capital Pay to develop Centralised Clearing and Forwarding Management System.
                  </p>
                  <div className="text-sm font-semibold text-[#E94258] group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                    Read on The Standard
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className="relative px-6 pb-16">
          <div className="max-w-7xl mx-auto">
            <FeaturedPost post={featuredPost} />
          </div>
        </section>
      )}

      <section className="relative px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-white/40 text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="relative px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div
            className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(137, 43, 135, 0.15) 0%, rgba(233, 66, 88, 0.15) 50%, rgba(242, 114, 36, 0.15) 100%)",
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
