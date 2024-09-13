"use client"
import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
};

export const useUserFacade = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isUserLoading, setUserLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      setUserLoading(true);
      const response = await fetch('/user/api');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data: User[] = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setUserLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    isUserLoading
  } as const;
}
