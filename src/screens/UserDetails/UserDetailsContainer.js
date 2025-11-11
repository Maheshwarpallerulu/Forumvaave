import React, { useEffect, useState } from "react";
import UserDetailsComponent from "./UserDetailsComponent";

const UserDetailsScreen = ({ route, navigation }) => {
  const { user } = route.params;

  return (
    <UserDetailsComponent
      user={user}
      onBack={() => navigation.goBack()}
    />
  );
};

export default UserDetailsScreen;
