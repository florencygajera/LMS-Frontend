import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';
const AGNIASSIST_URL = import.meta.env.VITE_AGNIASSIST_URL || 'http://localhost:8000/agniassist';

// Create axios instance for main API
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Create axios instance for AgniAssist
const agniAssistApi = axios.create({
  baseURL: AGNIASSIST_URL,
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
  (error) => Promise.reject(error)
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

// ============================================
// 🔐 AUTHENTICATION SERVICE (/api/v1/auth)
// ============================================

export const authAPI = {
  // POST /api/v1/auth/register - Register new user
  register: (data) => api.post('/auth/register', data),
  
  // POST /api/v1/auth/login - User login
  login: async (credentials) => {
    // Demo mode - return mock data for development
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
    // Production: return api.post('/auth/login', credentials);
  },
  
  // POST /api/v1/auth/refresh - Refresh token
  refreshToken: () => api.post('/auth/refresh'),
  
  // POST /api/v1/auth/logout - User logout
  logout: () => api.post('/auth/logout'),
  
  // GET /api/v1/auth/me - Get current user
  getCurrentUser: () => api.get('/auth/me'),
  
  // PUT /api/v1/auth/me - Update current user
  updateCurrentUser: (data) => api.put('/auth/me', data),
  
  // POST /api/v1/auth/password/change - Change password
  changePassword: (data) => api.post('/auth/password/change', data),
};

// ============================================
// 👨‍💼 SOLDIER SERVICE (/api/v1/soldiers)
// ============================================

export const soldierAPI = {
  // POST /api/v1/soldiers/profile - Create soldier profile
  createProfile: (data) => api.post('/soldiers/profile', data),
  
  // GET /api/v1/soldiers/profile - Get my profile
  getMyProfile: () => api.get('/soldiers/profile'),
  
  // GET /api/v1/soldiers/profile/{soldier_id} - Get soldier by ID
  getSoldierById: (soldierId) => api.get(`/soldiers/profile/${soldierId}`),
  
  // PUT /api/v1/soldiers/profile - Update my profile
  updateProfile: (data) => api.put('/soldiers/profile', data),
  
  // POST /api/v1/soldiers/documents - Upload document
  uploadDocument: (formData) => api.post('/soldiers/documents', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  
  // POST /api/v1/soldiers/battalions - Create battalion
  createBattalion: (data) => api.post('/soldiers/battalions', data),
  
  // GET /api/v1/soldiers/battalions - List battalions
  getBattalions: () => api.get('/soldiers/battalions'),
  
  // GET /api/v1/soldiers/battalions/{battalion_id} - Get battalion
  getBattalionById: (battalionId) => api.get(`/soldiers/battalions/${battalionId}`),
  
  // POST /api/v1/soldiers/medical-records - Create medical record
  createMedicalRecord: (data) => api.post('/soldiers/medical-records', data),
  
  // GET /api/v1/soldiers/medical-records - List medical records
  getMedicalRecords: () => api.get('/soldiers/medical-records'),
  
  // GET /api/v1/soldiers/medical-records/{record_id} - Get medical record
  getMedicalRecordById: (recordId) => api.get(`/soldiers/medical-records/${recordId}`),
  
  // POST /api/v1/soldiers/training-records - Create training record
  createTrainingRecord: (data) => api.post('/soldiers/training-records', data),
  
  // GET /api/v1/soldiers/training-records - List training records
  getTrainingRecords: () => api.get('/soldiers/training-records'),
  
  // GET /api/v1/soldiers/schedule - Get daily schedule
  getSchedule: () => api.get('/soldiers/schedule'),
  
  // GET /api/v1/soldiers/equipment - List equipment
  getEquipment: () => api.get('/soldiers/equipment'),
  
  // GET /api/v1/soldiers/events - List events
  getEvents: () => api.get('/soldiers/events'),
  
  // GET /api/v1/soldiers/stipends - List stipends
  getStipends: () => api.get('/soldiers/stipends'),
  
  // GET /api/v1/soldiers/rankings - Get performance rankings
  getRankings: () => api.get('/soldiers/rankings'),
  
  // POST /api/v1/soldiers/sos - Trigger SOS alert
  triggerSOS: (data) => api.post('/soldiers/sos', data),
  
  // GET /api/v1/soldiers/sos/active - Get active SOS
  getActiveSOS: () => api.get('/soldiers/sos/active'),
  
  // POST /api/v1/soldiers/sos/{sos_id}/resolve - Resolve SOS
  resolveSOS: (sosId) => api.post(`/soldiers/sos/${sosId}/resolve`),
};

// ============================================
// 📋 RECRUITMENT SERVICE (/api/v1/recruitment)
// ============================================

export const recruitmentAPI = {
  // POST /api/v1/recruitment/apply - Create application
  createApplication: (data) => api.post('/recruitment/apply', data),
  
  // GET /api/v1/recruitment/status - Get application status
  getApplicationStatus: () => api.get('/recruitment/status'),
  
  // PUT /api/v1/recruitment/profile - Update candidate
  updateCandidateProfile: (data) => api.put('/recruitment/profile', data),
  
  // POST /api/v1/recruitment/documents - Upload document
  uploadDocument: (formData) => api.post('/recruitment/documents', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  
  // GET /api/v1/recruitment/exam-centers - List exam centers
  getExamCenters: () => api.get('/recruitment/exam-centers'),
  
  // GET /api/v1/recruitment/exams - List exams
  getExams: () => api.get('/recruitment/exams'),
  
  // GET /api/v1/recruitment/exams/{exam_id} - Get exam details
  getExamById: (examId) => api.get(`/recruitment/exams/${examId}`),
  
  // POST /api/v1/recruitment/exams/register - Register for exam
  registerForExam: (examId) => api.post('/recruitment/exams/register', { exam_id: examId }),
  
  // GET /api/v1/recruitment/admit-card - Get admit card
  getAdmitCard: () => api.get('/recruitment/admit-card'),
  
  // POST /api/v1/recruitment/verify/{candidate_id} - Verify application
  verifyApplication: (candidateId) => api.post(`/recruitment/verify/${candidateId}`),
};

// ============================================
// 📊 REPORT SERVICE (/api/v1/reports)
// ============================================

export const reportAPI = {
  // GET /api/v1/reports/soldier/{soldier_id}/daily - Daily report
  getDailyReport: (soldierId) => api.get(`/reports/soldier/${soldierId}/daily`),
  
  // GET /api/v1/reports/soldier/{soldier_id}/monthly - Monthly report
  getMonthlyReport: (soldierId) => api.get(`/reports/soldier/${soldierId}/monthly`),
  
  // GET /api/v1/reports/soldier/{soldier_id}/medical - Medical report
  getMedicalReport: (soldierId) => api.get(`/reports/soldier/${soldierId}/medical`),
  
  // GET /api/v1/reports/soldier/{soldier_id}/stipend - Stipend report
  getStipendReport: (soldierId) => api.get(`/reports/soldier/${soldierId}/stipend`),
};

// ============================================
// 🏋️ TRAINING SERVICE (/api/v1/training)
// ============================================

export const trainingAPI = {
  // POST /api/v1/training/upload - Upload Excel file
  uploadExcel: (formData) => api.post('/training/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  
  // POST /api/v1/training/records - Create training record
  createTrainingRecord: (data) => api.post('/training/records', data),
  
  // GET /api/v1/training/records - Get training records
  getTrainingRecords: (params) => api.get('/training/records', { params }),
  
  // GET /api/v1/training/stats/{soldier_id} - Soldier training stats
  getSoldierTrainingStats: (soldierId) => api.get(`/training/stats/${soldierId}`),
  
  // GET /api/v1/training/battalion/{battalion_id}/stats - Battalion stats
  getBattalionTrainingStats: (battalionId) => api.get(`/training/battalion/${battalionId}/stats`),
};

// ============================================
// 🤖 ML SERVICE (/api/v1/ml)
// ============================================

export const mlAPI = {
  // POST /api/v1/ml/predict/performance - Predict performance
  predictPerformance: (data) => api.post('/ml/predict/performance', data),
  
  // POST /api/v1/ml/predict/injury-risk - Predict injury risk
  predictInjuryRisk: (data) => api.post('/ml/predict/injury-risk', data),
  
  // POST /api/v1/ml/analyze/trend - Analyze trend
  analyzeTrend: (data) => api.post('/ml/analyze/trend', data),
  
  // GET /api/v1/ml/insights/soldier/{soldier_id} - Soldier insights
  getSoldierInsights: (soldierId) => api.get(`/ml/insights/soldier/${soldierId}`),
  
  // GET /api/v1/ml/insights/battalion/{battalion_id} - Battalion insights
  getBattalionInsights: (battalionId) => api.get(`/ml/insights/battalion/${battalionId}`),
  
  // POST /api/v1/ml/training/optimize - Optimize training
  optimizeTraining: (data) => api.post('/ml/training/optimize', data),
  
  // POST /api/v1/ml/medical/analyze - Analyze medical risk
  analyzeMedicalRisk: (data) => api.post('/ml/medical/analyze', data),
};

// ============================================
// 🌤️ WEATHER SERVICE (/api/v1/weather)
// ============================================

export const weatherAPI = {
  // GET /api/v1/weather/current - Current weather
  getCurrentWeather: (params) => api.get('/weather/current', { params }),
  
  // GET /api/v1/weather/forecast - Weather forecast
  getForecast: (params) => api.get('/weather/forecast', { params }),
  
  // POST /api/v1/weather/recommendation - Training recommendation
  getTrainingRecommendation: (data) => api.post('/weather/recommendation', data),
  
  // POST /api/v1/weather/adjust-schedule - Adjust schedule
  adjustSchedule: (data) => api.post('/weather/adjust-schedule', data),
  
  // GET /api/v1/weather/battalion/{battalion_id}/weather-alert - Weather alert
  getWeatherAlert: (battalionId) => api.get(`/weather/battalion/${battalionId}/weather-alert`),
  
  // POST /api/v1/weather/schedule/auto-adjust - Auto-adjust schedule
  autoAdjustSchedule: (data) => api.post('/weather/schedule/auto-adjust', data),
};

// ============================================
// 🔔 NOTIFICATION SERVICE (/api/v1/notifications)
// ============================================

export const notificationAPI = {
  // POST /api/v1/notifications/send - Send notification
  sendNotification: (data) => api.post('/notifications/send', data),
  
  // POST /api/v1/notifications/broadcast - Broadcast notification
  broadcastNotification: (data) => api.post('/notifications/broadcast', data),
  
  // POST /api/v1/notifications/sos/trigger - Trigger SOS
  triggerSOS: (data) => api.post('/notifications/sos/trigger', data),
  
  // GET /api/v1/notifications/sos/active - Get active SOS
  getActiveSOS: () => api.get('/notifications/sos/active'),
  
  // POST /api/v1/notifications/sos/{alert_id}/resolve - Resolve SOS
  resolveSOS: (alertId) => api.post(`/notifications/sos/${alertId}/resolve`),
  
  // GET /api/v1/notifications/sos/history - SOS history
  getSOSHistory: () => api.get('/notifications/sos/history'),
};

// ============================================
// 📄 DOCUMENT SERVICE (/api/v1/documents)
// ============================================

export const documentAPI = {
  // POST /api/v1/documents/ocr - Process OCR
  processOCR: (formData) => api.post('/documents/ocr', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
};

// ============================================
// 🤖 AGNIASSIST SERVICE (AI/GenAI) (/agniassist)
// ============================================

export const agniAssistAPI = {
  // POST /agniassist/predict - Performance prediction
  predict: (data) => agniAssistApi.post('/predict', data),
  
  // POST /agniassist/predict/train - Train model
  trainModel: (data) => agniAssistApi.post('/predict/train', data),
  
  // GET /agniassist/predict/status - Model status
  getModelStatus: () => agniAssistApi.get('/predict/status'),
  
  // POST /agniassist/ocr - OCR processing
  processOCR: (formData) => agniAssistApi.post('/ocr', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  
  // POST /agniassist/ocr/extract_entities - Extract entities
  extractEntities: (data) => agniAssistApi.post('/ocr/extract_entities', data),
  
  // POST /agniassist/ask - RAG Q&A
  ask: (data) => agniAssistApi.post('/ask', data),
  
  // POST /agniassist/rag/add_document - Add document
  addDocument: (data) => agniAssistApi.post('/rag/add_document', data),
  
  // POST /agniassist/summarize - Summarize text
  summarize: (data) => agniAssistApi.post('/summarize', data),
  
  // POST /agniassist/extract_entities - Extract entities
  extractKeywords: (data) => agniAssistApi.post('/extract_entities', data),
  
  // POST /agniassist/analyze_sentiment - Sentiment analysis
  analyzeSentiment: (data) => agniAssistApi.post('/analyze_sentiment', data),
  
  // POST /agniassist/extract_keywords - Extract keywords
  getKeywords: (data) => agniAssistApi.post('/extract_keywords', data),
};

// Export default api instance
export default api;
