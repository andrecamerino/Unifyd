export default function getDefaultProfilePic(inputString) {
    const profilePics = ['book', 'books', 'brain', 'grad_cap', 'open-book', 'school', 'student', 'write'];
  
    // Simple hash function
    function hashString(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
      }
      return Math.abs(hash);
    }
  
    const hash = hashString(inputString);
    const index = hash % profilePics.length;
    return `/default_profile_pics/${profilePics[index]}.png`;
  }