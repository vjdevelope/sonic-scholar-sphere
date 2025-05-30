
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Search, Filter, Play, Clock, Star, Users, BookOpen } from 'lucide-react';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'guitar', label: 'Guitar' },
    { id: 'piano', label: 'Piano' },
    { id: 'theory', label: 'Music Theory' },
    { id: 'composition', label: 'Composition' },
    { id: 'production', label: 'Music Production' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Complete Guitar Mastery',
      instructor: 'John Smith',
      category: 'guitar',
      level: 'Beginner',
      duration: '20 hours',
      lessons: 45,
      rating: 4.8,
      students: 12500,
      progress: 75,
      thumbnail: '🎸',
      price: 'Free',
      description: 'Master the guitar from basics to advanced techniques with our comprehensive course.',
      enrolled: true
    },
    {
      id: 2,
      title: 'Piano Fundamentals',
      instructor: 'Sarah Johnson',
      category: 'piano',
      level: 'Beginner',
      duration: '15 hours',
      lessons: 30,
      rating: 4.9,
      students: 8900,
      progress: 45,
      thumbnail: '🎹',
      price: '$49',
      description: 'Learn piano fundamentals with proper technique and music reading skills.',
      enrolled: true
    },
    {
      id: 3,
      title: 'Music Theory Essentials',
      instructor: 'Dr. Michael Brown',
      category: 'theory',
      level: 'Intermediate',
      duration: '12 hours',
      lessons: 25,
      rating: 4.7,
      students: 15600,
      progress: 0,
      thumbnail: '📝',
      price: '$39',
      description: 'Understand the building blocks of music with comprehensive theory lessons.',
      enrolled: false
    },
    {
      id: 4,
      title: 'Songwriting & Composition',
      instructor: 'Emily Davis',
      category: 'composition',
      level: 'Advanced',
      duration: '18 hours',
      lessons: 35,
      rating: 4.9,
      students: 6700,
      progress: 0,
      thumbnail: '✍️',
      price: '$79',
      description: 'Develop your songwriting skills and learn professional composition techniques.',
      enrolled: false
    },
    {
      id: 5,
      title: 'Digital Music Production',
      instructor: 'Alex Rodriguez',
      category: 'production',
      level: 'Intermediate',
      duration: '25 hours',
      lessons: 50,
      rating: 4.8,
      students: 9200,
      progress: 0,
      thumbnail: '🎛️',
      price: '$99',
      description: 'Create professional music with modern production tools and techniques.',
      enrolled: false
    },
    {
      id: 6,
      title: 'Jazz Guitar Techniques',
      instructor: 'Robert Wilson',
      category: 'guitar',
      level: 'Advanced',
      duration: '22 hours',
      lessons: 40,
      rating: 4.6,
      students: 4500,
      progress: 0,
      thumbnail: '🎺',
      price: '$69',
      description: 'Master jazz guitar with advanced chord progressions and improvisation.',
      enrolled: false
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const enrolledCourses = courses.filter(course => course.enrolled);
  const availableCourses = courses.filter(course => !course.enrolled);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Courses</h1>
        <Button className="bg-primary hover:bg-primary/90">
          <BookOpen className="w-4 h-4 mr-2" />
          Browse All
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      {/* My Courses */}
      {enrolledCourses.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">My Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{course.thumbnail}</span>
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                  <p className="text-sm text-gray-600">by {course.instructor}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Play className="w-4 h-4 mr-1" />
                      {course.lessons} lessons
                    </div>
                  </div>

                  <Button className="w-full">
                    <Play className="w-4 h-4 mr-2" />
                    Continue Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Available Courses */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Available Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.filter(course => !course.enrolled).map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{course.thumbnail}</span>
                  <div className="text-right">
                    <Badge variant="secondary">{course.level}</Badge>
                    <div className="text-sm font-semibold text-primary mt-1">{course.price}</div>
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                <p className="text-sm text-gray-600">by {course.instructor}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-700">{course.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Play className="w-4 h-4 mr-1" />
                    {course.lessons} lessons
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    {course.rating}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students.toLocaleString()}
                  </div>
                </div>

                <Button className="w-full" variant={course.price === 'Free' ? 'default' : 'outline'}>
                  {course.price === 'Free' ? 'Enroll Now' : `Enroll for ${course.price}`}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
