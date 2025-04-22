export default function calculateTimeSince({dateTime}: { dateTime: string }) {
    const postDate: Date = new Date(dateTime);
    const now: Date = new Date();
    const diffInMs: number = now.getTime() - postDate.getTime();
    const diffInSeconds: number = Math.floor(diffInMs / 1000);
    const diffInMinutes: number = Math.floor(diffInSeconds / 60);
    const diffInHours: number = Math.floor(diffInMinutes / 60);
    const diffInDays: number = Math.floor(diffInHours / 24);
  
    if (diffInDays > 0) {
      return `${diffInDays} day(s) ago`;
    } else if (diffInHours > 0) {
      return `${diffInHours} hour(s) ago`;
    } else if (diffInMinutes > 0) {
      return `${diffInMinutes} minute(s) ago`;
    } else {
      return `${diffInSeconds} second(s) ago`;
    }
  }