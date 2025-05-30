
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, MessageCircle, Share2, Plus, Search, Users, Calendar, Music, Trophy } from 'lucide-react';

const Community = () => {
  const [newPost, setNewPost] = useState('');

  const posts = [
    {
      id: 1,
      author: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b047?w=150&h=150&fit=crop&crop=face',
      time: '2 hours ago',
      content: 'Just finished my first piano recital! 🎹 So grateful for all the support from this amazing community. The practice sessions really paid off!',
      likes: 24,
      comments: 8,
      shares: 3,
      tags: ['piano', 'recital', 'milestone']
    },
    {
      id: 2,
      author: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      time: '4 hours ago',
      content: 'Looking for someone to collaborate on a jazz fusion piece. I play guitar and need a bassist and drummer. Anyone interested? 🎸',
      likes: 18,
      comments: 12,
      shares: 5,
      tags: ['collaboration', 'jazz', 'guitar']
    },
    {
      id: 3,
      author: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      time: '1 day ago',
      content: 'Sharing my latest composition - "Moonlight Sonata Reimagined". Would love to get some feedback from fellow musicians! 🌙',
      likes: 42,
      comments: 15,
      shares: 8,
      tags: ['composition', 'classical', 'feedback']
    }
  ];

  const groups = [
    {
      id: 1,
      name: 'Guitar Enthusiasts',
      members: 2847,
      description: 'A community for guitar players of all levels',
      image: '🎸',
      isJoined: true
    },
    {
      id: 2,
      name: 'Music Theory Discussion',
      members: 1923,
      description: 'Deep dive into music theory concepts',
      image: '📝',
      isJoined: false
    },
    {
      id: 3,
      name: 'Jazz Collective',
      members: 1256,
      description: 'Jazz lovers unite! Share and discuss jazz music',
      image: '🎺',
      isJoined: true
    },
    {
      id: 4,
      name: 'Beginner Musicians',
      members: 3421,
      description: 'Support group for those just starting their journey',
      image: '🎵',
      isJoined: false
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Virtual Open Mic Night',
      date: '2024-02-15',
      time: '7:00 PM EST',
      participants: 45,
      type: 'online'
    },
    {
      id: 2,
      title: 'Music Theory Workshop',
      date: '2024-02-18',
      time: '2:00 PM EST',
      participants: 23,
      type: 'workshop'
    },
    {
      id: 3,
      title: 'Collaborative Composition Challenge',
      date: '2024-02-20',
      time: 'All Day',
      participants: 67,
      type: 'challenge'
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Alex Chen', points: 2847, badge: '🥇' },
    { rank: 2, name: 'Maria Santos', points: 2653, badge: '🥈' },
    { rank: 3, name: 'John Davis', points: 2441, badge: '🥉' },
    { rank: 4, name: 'Lisa Wang', points: 2298, badge: '🏆' },
    { rank: 5, name: 'You', points: 1876, badge: '⭐' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Community</h1>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Create Post
        </Button>
      </div>

      <Tabs defaultValue="feed" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="feed">Feed</TabsTrigger>
          <TabsTrigger value="groups">Groups</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
        </TabsList>

        <TabsContent value="feed" className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              {/* Create Post */}
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <Textarea
                      placeholder="Share your musical journey, ask questions, or connect with other musicians..."
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      className="min-h-[100px]"
                    />
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Music className="w-4 h-4 mr-1" />
                          Audio
                        </Button>
                        <Button variant="outline" size="sm">
                          📷 Photo
                        </Button>
                      </div>
                      <Button>Post</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Posts Feed */}
              {posts.map((post) => (
                <Card key={post.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarImage src={post.avatar} alt={post.author} />
                        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{post.author}</h3>
                          <span className="text-sm text-gray-500">{post.time}</span>
                        </div>
                        <p className="mt-2 text-gray-800">{post.content}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary">#{tag}</Badge>
                          ))}
                        </div>
                        <div className="mt-4 flex items-center space-x-6 text-gray-500">
                          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-500">
                            <Heart className="w-4 h-4 mr-1" />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-500">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {post.comments}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-green-500">
                            <Share2 className="w-4 h-4 mr-1" />
                            {post.shares}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Community Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Posts this week</span>
                    <span className="font-semibold">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Likes received</span>
                    <span className="font-semibold">47</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Community rank</span>
                    <span className="font-semibold">#127</span>
                  </div>
                </CardContent>
              </Card>

              {/* Trending Topics */}
              <Card>
                <CardHeader>
                  <CardTitle>Trending Topics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {['#guitarbasics', '#jazzimprov', '#songwriting', '#musictheory', '#practice'].map((topic, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-primary cursor-pointer hover:underline">{topic}</span>
                      <span className="text-sm text-gray-500">{Math.floor(Math.random() * 100) + 20} posts</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="groups" className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search groups..." className="pl-10" />
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Group
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group) => (
              <Card key={group.id}>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">{group.image}</div>
                    <h3 className="font-semibold text-lg mb-2">{group.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{group.description}</p>
                    <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                      <Users className="w-4 h-4 mr-1" />
                      {group.members.toLocaleString()} members
                    </div>
                    <Button className={group.isJoined ? "w-full" : "w-full"} variant={group.isJoined ? "outline" : "default"}>
                      {group.isJoined ? 'Joined' : 'Join Group'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <div className="grid gap-4">
            {events.map((event) => (
              <Card key={event.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{event.title}</h3>
                        <p className="text-sm text-gray-600">{event.date} at {event.time}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Users className="w-4 h-4 mr-1" />
                          {event.participants} participants
                        </div>
                      </div>
                    </div>
                    <Button>Join Event</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="leaderboard" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                Community Leaderboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaderboard.map((user) => (
                  <div key={user.rank} className={`flex items-center justify-between p-4 rounded-lg ${user.rank <= 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50' : 'bg-gray-50'}`}>
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl">{user.badge}</div>
                      <div>
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-sm text-gray-600">Rank #{user.rank}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">{user.points.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">points</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Community;
