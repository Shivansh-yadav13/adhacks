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
    console.log("user", user);
    if (user) {
      const localUser = JSON.parse(localStorage.getItem("user") || "{}");

      if (!localUser || localUser.id !== user.id) {
        localStorage.setItem("user", JSON.stringify(user));
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
  }, []);

  return (
    <UserDataContext.Provider value={{}}>
      {isLoaded && isSignedIn && children}
    </UserDataContext.Provider>
  );
};
