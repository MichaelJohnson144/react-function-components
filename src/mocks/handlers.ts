import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('/api/form', async ({ request }) => {
    const formData = await request.json();
    console.log('Intercepted form submission with data:', formData);

    return HttpResponse.json({ message: 'Form submission successful!' }, { status: 200 });
  }),
];
