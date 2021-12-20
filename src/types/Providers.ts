import React, { ReactChild, ReactChildren } from "react";

export interface ChilProps {
  children: ReactChild | ReactChildren;
}

export interface ChildNode {
  children: React.ReactElement;
}

export interface AuthProps {
  account: {
    isLoggedIn: boolean;
    isInitialized: boolean;
    user: null;
  };
}
