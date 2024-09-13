"use client"
import { UserComponent } from "../components";
import { useUserFacade } from "./user.facade";

export const UserContainer = () => {
  const { users } = useUserFacade();

  return <UserComponent users={users}/>
};

