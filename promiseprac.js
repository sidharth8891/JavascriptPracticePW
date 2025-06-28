// A function that returns a Promise simulating an asynchronous task (e.g., fetching data)
function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false; // Simulate a successful server response
      
      if (success) {
        resolve("Data successfully fetched!"); // Resolve with data
      } else {
        reject("Failed to fetch data."); // Reject with an error message
      }
    }, 2000); // Simulate a 2-second delay (e.g., network delay)
  });
}

// An async function that calls the Promise-based function
async function fetchData() {
  try {
    console.log("Fetching data from server...");
    const result = await fetchDataFromServer(); // Await the resolution of the Promise
    console.log(result); // Logs: "Data successfully fetched!" after 2 seconds
  } catch (error) {
    console.error(error); // Logs any errors if the Promise is rejected
  }
}

// Call the async function
fetchData();