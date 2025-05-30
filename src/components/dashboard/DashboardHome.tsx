
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Play, Clock, TrendingUp, Award, BookOpen, Users } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const DashboardHome = () => {
  const { user } = useAuth();

  const recentCourses = [
    {
      id: 1,
      title: "Guitar Fundamentals",
      progress: 75,
      lastAccessed: "2 hours ago",
      thumbnail: "🎸"
    },
    {
      id: 2,
      title: "Music Theory Basics",
      progress: 45,
      lastAccessed: "1 day ago",
      thumbnail: "📝"
    },
    {
      id: 3,
      title: "Piano Techniques",
      progress: 60,
      lastAccessed: "3 days ago",
      thumbnail: "🎹"
    }
  ];

  const achievements = [
    { title: "First Lesson Complete", icon: "🎯", date: "Yesterday" },
    { title: "Practice Streak: 7 Days", icon: "🔥", date: "Today" },
    { title: "Theory Master", icon: "🧠", date: "2 days ago" }
  ];

  const stats = [
    { label: "Total Practice Time", value: "24h 30m", icon: Clock, color: "text-blue-600" },
    { label: "Courses Completed", value: "3", icon: BookOpen, color: "text-green-600" },
    { label: "Skill Level", value: user?.level || "Beginner", icon: TrendingUp, color: "text-purple-600" },
    { label: "Community Rank", value: "#127", icon: Users, color: "text-orange-600" }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}! 🎵</h1>
        <p className="text-blue-100 mb-4">Ready to continue your musical journey?</p>
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 rounded-lg p-3">
            <div className="text-sm text-blue-100">Overall Progress</div>
            <div className="text-2xl font-bold">{user?.progress}%</div>
          </div>
          <Button className="bg-white text-primary hover:bg-gray-100">
            <Play className="w-4 h-4 mr-2" />
            Continue Learning
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Continue Learning */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Continue Learning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentCourses.map((course) => (
                <div key={course.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="text-3xl">{course.thumbnail}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{course.title}</h3>
                    <p className="text-sm text-gray-500">Last accessed {course.lastAccessed}</p>
                    <div className="mt-2">
                      <Progress value={course.progress} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">{course.progress}% complete</p>
                    </div>
                  </div>
                  <Button size="sm">
                    <Play className="w-4 h-4 mr-1" />
                    Resume
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Achievements */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-yellow-500" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <p className="font-medium text-gray-900">{achievement.title}</p>
                    <p className="text-xs text-gray-500">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
