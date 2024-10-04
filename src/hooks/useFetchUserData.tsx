"use client";

const useFetchUserData = async () => {
  try {
    const resp = await fetch("/api/users/user-data", {
      method: "GET",
      headers: {
        "Content-type": "Application/json",
      },
    });

    if (!resp.ok) {
      const errorData = await resp.json();
      throw new Error(errorData.error);
    }

    const user = await resp.json();
    return user.data;
  } catch (err) {
    console.log("Error fetching user data:", err);
  }
};

export default useFetchUserData;
