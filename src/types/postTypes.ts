export interface ClassPost {
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

  export interface ClubPostType {
    userId: string;
    username: string;
    profilePicPath: string;
    imagePath: string;
    club: string;
    title: string;
    content: string;
    commentIds: string[];
    loves: number;
    shares: number;
    createdAt: string;
  }