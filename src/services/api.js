import axios from 'axios';

const API_URL = 'https://coachingwebsite-production.up.railway.app/api';             
//'http://16.171.144.29:8080/api';

const api = axios.create({
    baseURL: API_URL,
});

// Course API calls
export const getAllCourses = () => api.get('/courses');
export const getCourseById = (id) => api.get(`/courses/${id}`);
export const createCourse = (course) => api.post('/courses', course);
export const updateCourse = (id, course) => api.put(`/courses/${id}`, course);
export const deleteCourse = (id) => api.delete(`/courses/${id}`);

// Enquiry API calls
export const submitEnquiry = (enquiry) => api.post('/enquiries', enquiry);


// Admin Enquiry API calls
export const getAllEnquiries = () => api.get('/admin/enquiries');
export const toggleEnquiryClarified = (id) => api.patch(`/admin/enquiries/${id}/toggle`);

export default api;
