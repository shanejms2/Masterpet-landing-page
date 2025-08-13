'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Eye, Calendar, Tag } from 'lucide-react';
import { BlogPost } from '@/types/blog';

interface BlogAnalyticsProps {
  posts: BlogPost[];
  className?: string;
}

interface AnalyticsData {
  totalPosts: number;
  totalTags: number;
  averageReadingTime: number;
  mostUsedTag: string;
  recentPosts: BlogPost[];
  topTags: Array<{ tag: string; count: number }>;
}

const BlogAnalytics = ({ posts, className = '' }: BlogAnalyticsProps) => {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);

  useEffect(() => {
    if (posts.length === 0) return;

    // Calculate analytics
    const allTags = posts.flatMap(post => post.meta.tags || []);
    const tagCounts = allTags.reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const readingTimes = posts.map(post => 
      post.meta.readingTime || Math.ceil(post.content.split(/\s+/).length / 200)
    );

    const mostUsedTag = Object.entries(tagCounts)
      .sort(([,a], [,b]) => b - a)[0]?.[0] || 'N/A';

    const averageReadingTime = Math.round(
      readingTimes.reduce((sum, time) => sum + time, 0) / readingTimes.length
    );

    const recentPosts = posts
      .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime())
      .slice(0, 3);

    const topTags = Object.entries(tagCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([tag, count]) => ({ tag, count }));

    setAnalytics({
      totalPosts: posts.length,
      totalTags: Object.keys(tagCounts).length,
      averageReadingTime,
      mostUsedTag,
      recentPosts,
      topTags
    });
  }, [posts]);

  if (!analytics) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader className="pb-2">
              <div className="h-4 bg-muted rounded w-3/4"></div>
            </CardHeader>
            <CardContent>
              <div className="h-8 bg-muted rounded w-1/2"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.totalPosts}</div>
            <p className="text-xs text-muted-foreground">
              Published articles
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tags</CardTitle>
            <Tag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.totalTags}</div>
            <p className="text-xs text-muted-foreground">
              Topics covered
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Reading Time</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.averageReadingTime}m</div>
            <p className="text-xs text-muted-foreground">
              Per article
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Most Popular Tag</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.mostUsedTag}</div>
            <p className="text-xs text-muted-foreground">
              Most discussed topic
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Top Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tag className="h-5 w-5" />
            Top Tags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {analytics.topTags.map(({ tag, count }) => (
              <Badge key={tag} variant="outline" className="flex items-center gap-1">
                {tag}
                <span className="text-xs bg-primary text-primary-foreground rounded-full px-1.5 py-0.5">
                  {count}
                </span>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {analytics.recentPosts.map((post) => (
              <div key={post.slug} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{post.meta.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {new Date(post.meta.date).toLocaleDateString()}
                  </p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {post.meta.tags?.[0] || 'No tags'}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogAnalytics;
