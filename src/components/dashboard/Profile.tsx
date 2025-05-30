
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Edit, MapPin, Calendar, Award, Music, Trophy } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: 'Passionate music learner exploring various instruments and genres.',
    location: 'New York, USA',
    instruments: ['Guitar', 'Piano', 'Violin'],
    favoriteGenres: ['Classical', 'Jazz', 'Rock']
  });

  const achievements = [
    { title: 'First Song Mastered', icon: Music, color: 'bg-blue-500', date: '2024-01-15' },
    { title: 'Theory Expert', icon: Award, color: 'bg-green-500', date: '2024-02-20' },
    { title: 'Perfect Pitch', icon: Trophy, color: 'bg-yellow-500', date: '2024-03-10' },
    { title: '30-Day Streak', icon: Calendar, color: 'bg-purple-500', date: '2024-03-25' }
  ];

  const skillProgress = [
    { skill: 'Guitar', level: 'Intermediate', progress: 75 },
    { skill: 'Music Theory', level: 'Advanced', progress: 90 },
    { skill: 'Piano', level: 'Beginner', progress: 30 },
    { skill: 'Composition', level: 'Intermediate', progress: 60 }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        <Button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="bg-primary hover:bg-primary/90"
        >
          <Edit className="w-4 h-4 mr-2" />
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={user?.avatar} alt={user?.name} />
                  <AvatarFallback className="text-2xl">{user?.name?.charAt(0) || 'U'}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={profileData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{profileData.name}</h2>
                      <p className="text-gray-600">{profileData.email}</p>
                      <div className="flex items-center text-gray-500 mt-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        {profileData.location}
                      </div>
                      <Badge variant="secondary" className="mt-2">
                        {user?.level} Level
                      </Badge>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="bio">Bio</Label>
                {isEditing ? (
                  <Textarea
                    id="bio"
                    value={profileData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    className="mt-1"
                  />
                ) : (
                  <p className="text-gray-700 mt-1">{profileData.bio}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Instruments</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {profileData.instruments.map((instrument, index) => (
                      <Badge key={index} variant="outline">{instrument}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <Label>Favorite Genres</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {profileData.favoriteGenres.map((genre, index) => (
                      <Badge key={index} variant="outline">{genre}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skill Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Skill Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skillProgress.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.skill}</span>
                    <Badge variant="secondary">{skill.level}</Badge>
                  </div>
                  <Progress value={skill.progress} className="h-2" />
                  <p className="text-sm text-gray-500">{skill.progress}% mastery</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`w-10 h-10 ${achievement.color} rounded-full flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{achievement.title}</p>
                      <p className="text-xs text-gray-500">{achievement.date}</p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Statistics */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Learning Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                <div className="text-3xl font-bold text-primary">156</div>
                <div className="text-sm text-gray-600">Hours Practiced</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-xl font-bold text-gray-900">12</div>
                  <div className="text-xs text-gray-600">Courses</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-xl font-bold text-gray-900">24</div>
                  <div className="text-xs text-gray-600">Certificates</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
