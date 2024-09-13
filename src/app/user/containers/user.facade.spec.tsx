import { renderHook, waitFor } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import { server } from '../api/mocks';
import { useUserFacade } from "./user.facade";

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('useUserFacade', () => {
  it('should fetch users correctly', async () => {
    const { result } = renderHook(() => useUserFacade())

    expect(result.current.isUserLoading).toBe(true);
    expect(result.current.users).toEqual([]);

    await waitFor(() => {
      expect(result.current.isUserLoading).toBe(false);
    });
    expect(result.current.users).toStrictEqual([
      { id: '1', name: 'Leanne', email: '' },
      { id: '2', name: 'Clementina', email: '' }
    ]);
  })

  // TODO: fetchに失敗したテストケースを追加する
  it.skip('should fetch users failed')
})
