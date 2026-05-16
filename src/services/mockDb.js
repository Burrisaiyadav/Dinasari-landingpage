// Simple LocalStorage based database for Dinasari
const DB_NAME = 'dinasari_db';

const getDb = () => {
  const data = localStorage.getItem(DB_NAME);
  return data ? JSON.parse(data) : { applications: [], inquiries: [], newsletter: [] };
};

const saveDb = (db) => {
  localStorage.setItem(DB_NAME, JSON.stringify(db));
};

export const db = {
  // Applications (Careers)
  applications: {
    add: (data) => {
      const dbData = getDb();
      const newEntry = { id: Date.now(), ...data, status: 'pending' };
      dbData.applications.push(newEntry);
      saveDb(dbData);
      return newEntry;
    },
    getAll: () => getDb().applications
  },

  // Investor Inquiries
  inquiries: {
    add: (data) => {
      const dbData = getDb();
      const newEntry = { id: Date.now(), ...data };
      dbData.inquiries.push(newEntry);
      saveDb(dbData);
      return newEntry;
    },
    getAll: () => getDb().inquiries
  },

  // Newsletter
  newsletter: {
    subscribe: (email) => {
      const dbData = getDb();
      if (!dbData.newsletter.includes(email)) {
        dbData.newsletter.push(email);
        saveDb(dbData);
      }
    }
  }
};
