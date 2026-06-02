// Prisma-powered API service for Dinasari
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const db = {
  // Applications (Careers)
  applications: {
    add: async (data) => {
      try {
        const response = await fetch(`${API_URL}/applications`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        return await response.json();
      } catch (error) {
        console.error("API Error:", error);
        throw error;
      }
    }
  },

  // Investor Inquiries
  inquiries: {
    add: async (data) => {
      try {
        const response = await fetch(`${API_URL}/inquiries`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        return await response.json();
      } catch (error) {
        console.error("API Error:", error);
        throw error;
      }
    }
  },

  // Newsletter
  newsletter: {
    subscribe: async (email) => {
      try {
        const response = await fetch(`${API_URL}/subscribers`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
        return await response.json();
      } catch (error) {
        console.error("API Error:", error);
        return { success: false, message: "Failed to connect to the server." };
      }
    }
  }
};
