function fetchName() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Sidharth"), 5000);
    });
}

async function showName() {
    const name = await fetchName();
    console.log("Name is:", name);
}


console.log("Still Waiting..");
showName();
