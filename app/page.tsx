"use client";

/**
 * Problem: Fetch and Display Data Component
 * 
 * Your task is to create a React component named `UserData` that fetches user data from a public API and displays the user's name and email.
 * The API endpoint to use is: https://jsonplaceholder.typicode.com/users/1
 * 
 * Requirements:
 * 1. Fetch the user data from the API using the useEffect hook when the component mounts.
 * 2. Store the fetched data in state using the useState hook.
 * 3. Display the user's name and email in the component.
 * 4. Handle loading and error states appropriately.
 * 5. Use async/await for the fetch operation.
 * 
 * You should write your solution in the designated sections below.
 * Good luck!
 */

import React, { useState, useEffect } from 'react';

const Home = () => {
  // Step 1: Define state for user data, loading, and error
  // Your code here

  useEffect(() => {
    // Step 2: Fetch user data from the API
    const fetchData = async () => {
      // Your code here: set loading state, fetch data, handle response, catch errors
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Step 3: Implement loading state handling
  // Your code here

  // Step 4: Implement error handling
  // Your code here

  // Step 5: Display user data (name and email)
  return (
    <div>
      {/* Your code here: Conditionally render user data, loading message, or error message */}
    </div>
  );
}

export default Home;
