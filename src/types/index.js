export const User = {
  id: "",
  name: "",
  role: "student", // 'student', 'counselor', or 'advisor'
  email: "",
  avatar: ""
};

export const Milestone = {
  id: "",
  title: "",
  description: "",
  completed: false,
  dueDate: ""
};

export const Skill = {
  id: "",
  name: "",
  progress: 0,
  category: ""
};

export const Analytics = {
  skillProgress: 0,
  milestonesCompleted: 0,
  activeDays: 0,
  upcomingEvents: 0
};

export const Course = {
  id: "",
  title: "",
  description: "",
  duration: "",
  level: "Beginner", // 'Beginner', 'Intermediate', or 'Advanced'
  category: "",
  progress: 0,
  thumbnail: ""
};

export const Goal = {
  id: "",
  title: "",
  description: "",
  deadline: "",
  status: "Not Started", // 'Not Started', 'In Progress', or 'Completed'
  priority: "Low" // 'Low', 'Medium', or 'High'
};

export const Event = {
  id: 0,
  title: "",
  date: "",
  time: "",
  type: "",
  description: "",
  attendees: 0
};

export const NetworkConnection = {
  id: "",
  name: "",
  role: "",
  company: "",
  avatar: "",
  connectionDate: "",
  status: "connected" // 'connected' or 'pending'
};

export const Counselor = {
  id: "",
  name: "",
  role: "counselor", // 'counselor' or 'advisor'
  company: "",
  specialization: [],
  experience: 0,
  rating: 0,
  reviews: 0,
  availability: "Available", // 'Available', 'Busy', or 'Away'
  avatar: "",
  bio: "",
  hourlyRate: 0,
  languages: []
};
