const fetchGreeting = async () => {
    try {
      const response = await fetch('/api/greetings');
      const data = await response.json();
      return data
    } catch (error) {
      throw new Error(400);
    }
  }
  
  export default fetchGreeting