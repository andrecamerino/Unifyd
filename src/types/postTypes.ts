export interface Post {
    userId: string;
    username: string;
    profilePicPath: string;
    imagePath: string;
    course: string;
    courseNumber: string;
    title: string;
    content: string;
    commentIds: string[];
    meToos: number;
    shares: number;
    createdAt: string;
  }