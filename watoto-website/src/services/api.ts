/**
 * API Service for Katonda Talemwa Ministries
 * Connects frontend forms to backend on Railway or Localhost
 */

const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/$/, '');

async function postJSON<T = any>(endpoint: string, data: any): Promise<{ success: boolean; message?: string; error?: string; data?: T }> {
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const json = await res.json().catch(() => null);

    if (!res.ok) {
      return {
        success: false,
        error: (json && json.error) ? json.error : `Request failed with status ${res.status}`
      };
    }

    return json || { success: true };
  } catch (err: any) {
    console.warn(`API call to ${endpoint} failed:`, err.message);
    // If backend is offline or network error, return structured error
    return {
      success: false,
      error: err.message || 'Unable to connect to the server. Please check your connection.'
    };
  }
}

export const api = {
  // 1. Contact Us
  submitContact: (data: { name: string; email: string; subject: string; message: string }) =>
    postJSON('/api/contact', data),

  // 2. Volunteer Application
  submitVolunteer: (data: { name: string; email: string; country: string; role: string; duration: string; message?: string }) =>
    postJSON('/api/volunteers', data),

  // 3. Child Sponsorship Pledge
  submitSponsorship: (data: { childId?: string; childName: string; sponsorName: string; sponsorEmail: string; amount?: number }) =>
    postJSON('/api/sponsorships', data),

  // 4. Donation Record / Pledge
  submitDonation: (data: { donorName?: string; donorEmail?: string; amount: number | string; frequency: 'one-time' | 'monthly'; designation?: string }) =>
    postJSON('/api/donations', data),

  // 5. Job / Career Application
  submitCareer: (data: { name: string; email: string; jobTitle: string; cvUrl: string; coverLetter?: string }) =>
    postJSON('/api/careers', data),

  // 6. Mission & Exchange Trip Inquiry
  submitExchange: (data: { name: string; email: string; phone: string; groupType: string; teamSize?: string; preferredDate?: string; message?: string }) =>
    postJSON('/api/exchange-inquiries', data),

  // 7. Prayer Request
  submitPrayer: (data: { name: string; email: string; request: string }) =>
    postJSON('/api/prayers', data),

  // 8. Newsletter Subscription
  subscribeNewsletter: (email: string) =>
    postJSON('/api/newsletter', { email }),
};

export default api;
