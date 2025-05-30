
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, RotateCcw, Volume2, Settings, Clock, Target, TrendingUp } from 'lucide-react';

const Practice = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [selectedInstrument, setSelectedInstrument] = useState('guitar');

  const instruments = [
    { id: 'guitar', name: 'Guitar', icon: '🎸', color: 'bg-blue-500' },
    { id: 'piano', name: 'Piano', icon: '🎹', color: 'bg-green-500' },
    { id: 'violin', name: 'Violin', icon: '🎻', color: 'bg-purple-500' },
    { id: 'drums', name: 'Drums', icon: '🥁', color: 'bg-red-500' }
  ];

  const practiceExercises = [
    {
      id: 1,
      title: 'Chord Progressions',
      difficulty: 'Beginner',
      duration: '10 min',
      description: 'Practice basic major and minor chord progressions',
      completed: false
    },
    {
      id: 2,
      title: 'Scale Practice',
      difficulty: 'Intermediate',
      duration: '15 min',
      description: 'Master pentatonic and major scales',
      completed: true
    },
    {
      id: 3,
      title: 'Fingerpicking Patterns',
      difficulty: 'Advanced',
      duration: '20 min',
      description: 'Complex fingerpicking patterns and techniques',
      completed: false
    }
  ];

  const todayStats = [
    { label: 'Practice Time', value: '45 min', target: '60 min', progress: 75 },
    { label: 'Exercises Completed', value: '3', target: '5', progress: 60 },
    { label: 'Accuracy', value: '87%', target: '90%', progress: 87 },
    { label: 'Streak', value: '7 days', target: '30 days', progress: 23 }
  ];

  const virtualKeyboard = [
    { note: 'C', type: 'white' },
    { note: 'C#', type: 'black' },
    { note: 'D', type: 'white' },
    { note: 'D#', type: 'black' },
    { note: 'E', type: 'white' },
    { note: 'F', type: 'white' },
    { note: 'F#', type: 'black' },
    { note: 'G', type: 'white' },
    { note: 'G#', type: 'black' },
    { note: 'A', type: 'white' },
    { note: 'A#', type: 'black' },
    { note: 'B', type: 'white' }
  ];

  const playNote = (note: string) => {
    console.log(`Playing note: ${note}`);
    // Here you would integrate with a Web Audio API or similar
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Practice Session</h1>
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-gray-500" />
          <span className="text-lg font-semibold">45:32</span>
        </div>
      </div>

      {/* Instrument Selection */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Choose Your Instrument</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instruments.map((instrument) => (
            <Card 
              key={instrument.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                selectedInstrument === instrument.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setSelectedInstrument(instrument.id)}
            >
              <CardContent className="p-4 text-center">
                <div className={`w-12 h-12 ${instrument.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                  <span className="text-2xl">{instrument.icon}</span>
                </div>
                <p className="font-medium">{instrument.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Practice Exercises */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Today's Practice Plan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {practiceExercises.map((exercise) => (
                <div key={exercise.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${exercise.completed ? 'bg-green-500' : 'bg-gray-300'}`} />
                      <h3 className="font-semibold">{exercise.title}</h3>
                      <Badge variant="outline">{exercise.difficulty}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{exercise.description}</p>
                    <p className="text-sm text-gray-500">{exercise.duration}</p>
                  </div>
                  <Button 
                    size="sm" 
                    variant={exercise.completed ? "outline" : "default"}
                    disabled={exercise.completed}
                  >
                    {exercise.completed ? 'Completed' : 'Start'}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Virtual Instrument */}
          {selectedInstrument === 'piano' && (
            <Card>
              <CardHeader>
                <CardTitle>Virtual Piano</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="flex">
                      {virtualKeyboard.map((key, index) => (
                        <button
                          key={index}
                          onClick={() => playNote(key.note)}
                          className={`relative ${
                            key.type === 'white'
                              ? 'bg-white border border-gray-300 w-12 h-32 hover:bg-gray-50'
                              : 'bg-gray-900 w-8 h-20 -mx-1 z-10 hover:bg-gray-800'
                          } transition-colors duration-150 active:bg-gray-200`}
                        >
                          <span className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs ${
                            key.type === 'white' ? 'text-gray-600' : 'text-white'
                          }`}>
                            {key.note}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Metronome */}
          <Card>
            <CardHeader>
              <CardTitle>Metronome</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <div className="text-4xl font-bold">120</div>
                <div className="text-sm text-gray-600">BPM</div>
                <Button variant="outline" size="icon">
                  <Volume2 className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Practice Stats */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-primary" />
                Today's Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {todayStats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{stat.label}</span>
                    <span className="text-gray-600">{stat.value} / {stat.target}</span>
                  </div>
                  <Progress value={stat.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                Weekly Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary">5h 23m</div>
                <div className="text-sm text-gray-600">Total Practice Time</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-gray-900">18</div>
                  <div className="text-xs text-gray-600">Exercises</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-gray-900">92%</div>
                  <div className="text-xs text-gray-600">Avg Accuracy</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start">
                <Play className="w-4 h-4 mr-2" />
                Start Free Practice
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <RotateCcw className="w-4 h-4 mr-2" />
                Repeat Last Session
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Settings className="w-4 h-4 mr-2" />
                Practice Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Practice;
