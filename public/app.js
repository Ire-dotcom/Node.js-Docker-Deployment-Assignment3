const button = document.getElementById("helloButton");
const result = document.getElementById("result");

button.addEventListener("click", async () => {
  result.textContent = "Loading...";

  try {
    const response = await fetch("/api/hello");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    result.textContent = `${data.message} (${data.timestamp})`;
  } catch (error) {
    result.textContent = `Request failed: ${error.message}`;
  }
});
