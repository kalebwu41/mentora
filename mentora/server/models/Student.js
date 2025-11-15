export const StudentProfileSchema = {
  name: String,
  graduationYear: Number,
  pods: [String],
  roadmapTrack: String,
  milestonesCompleted: Number,
  reflections: [
    {
      content: String,
      createdAt: Date,
    },
  ],
};

export const mockStudents = [
  {
    name: "Taylor Rivera",
    graduationYear: 2028,
    pods: ["software", "business"],
    roadmapTrack: "software-engineering",
    milestonesCompleted: 24,
    reflections: [
      {
        content: "Led my hackathon team and shipped v2 of my tutoring app.",
        createdAt: new Date().toISOString(),
      },
    ],
  },
];
