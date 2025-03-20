export const submitContactForm = async (formData) => {
  try {
    const response = await fetch('YOUR_API_ENDPOINT/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) throw new Error('Failed to submit form');
    return await response.json();
  } catch (error) {
    throw error;
  }
};