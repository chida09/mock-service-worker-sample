import { http, HttpResponse } from 'msw';
import { mockData } from './user';

export const handlers = [
  http.get(
    '/user/api', () => {
      return HttpResponse.json(mockData)
    }
  ),
]
