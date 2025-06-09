"use client";
import React, { createContext, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useUserStore } from "@/store/user-store";

const UserDataContext = createContext({});

export const UserDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user, isLoaded, isSignedIn } = useUser();
  const { createUser, setUser } = useUserStore();

  useEffect(() => {
    console.log(user);
    if (!isLoaded) return; // Wait for Clerk to load

    if (isSignedIn && user) {
      const localUser = JSON.parse(
        localStorage.getItem("user-adhacks") || "{}"
      );

      if (!localUser || localUser.id !== user.id) {
        localStorage.setItem(
          "user-adhacks",
          JSON.stringify({
            id: user.id,
            email: user.emailAddresses[0].emailAddress,
            name: user.fullName,
            profileUrl: user.imageUrl,
          })
        );
        createUser({
          id: user.id,
          email: user.emailAddresses[0].emailAddress,
          name: user.fullName,
          profileUrl: user.imageUrl,
        });
        return;
      }

      // same user
      if (localUser.id === user.id) {
        setUser(localUser);
        return;
      }
    }
  }, [isLoaded, isSignedIn, user]); // Add dependencies to re-run when these values change

  return (
    <UserDataContext.Provider value={{}}>{children}</UserDataContext.Provider>
  );
};
