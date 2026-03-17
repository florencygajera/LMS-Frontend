import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth APIs
export const loginUser = async (credentials) => {
  // Demo mode - return mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      const roles = {
        CANDIDATE: { name: 'Aryan Sharma', role: 'CANDIDATE', id: 'AGN-APP-2025-84721' },
        SOLDIER: { name: 'Rajveer Singh Chauhan', role: 'SOLDIER', id: 'AGN-2024-0101', soldierId: 'AGN-2024-0101' },
        ADMIN: { name: 'Maj. Ankit Verma', role: 'ADMIN', id: 'ADMIN-001' },
        TRAINER: { name: 'Cpt. Pradeep Kumar', role: 'TRAINER', id: 'TRN-001' },
        DOCTOR: { name: 'Dr. Sunita Rao', role: 'DOCTOR', id: 'MED-001' },
      };
      const user = roles[credentials.role] || roles.ADMIN;
      resolve({
        token: 'demo-token-' + Date.now(),
        user,
      });
    }, 500);
  });
};

// Soldier APIs
export const getSoldiers = async () => {
  // Mock data - in production, replace with API call
  return Promise.resolve({
    data: [],
  });
};

export const getSoldierById = async (id) => {
  return Promise.resolve({ data: null });
};

export const updateSoldier = async (id, data) => {
  return Promise.resolve({ data: { ...data, id } });
};

// Battalion APIs
export const getBattalions = async () => {
  return Promise.resolve({ data: [] });
};

export const getBattalionById = async (id) => {
  return Promise.resolve({ data: null });
};

export const updateBattalion = async (id, data) => {
  return Promise.resolve({ data: { ...data, id } });
};

// Application APIs
export const getApplications = async () => {
  return Promise.resolve({ data: [] });
};

export const updateApplication = async (id, data) => {
  return Promise.resolve({ data: { ...data, id } });
};

// SOS APIs
export const getSOSAlerts = async () => {
  return Promise.resolve({ data: [] });
};

export const triggerSOS = async (data) => {
  return Promise.resolve({ data: { ...data, id: 'SOS-' + Date.now() } });
};

export const resolveSOS = async (id) => {
  return Promise.resolve({ data: { id, status: 'resolved' } });
};

// ML Insights APIs
export const getMLInsights = async (soldierId) => {
  return Promise.resolve({ data: null });
};

export const getTrainingOptimization = async (soldierId) => {
  return Promise.resolve({ data: null });
};

// Document OCR API
export const uploadDocument = async (formData) => {
  return Promise.resolve({ 
    data: {
      status: 'success',
      extractedFields: {}
    }
  });
};

export default api;
