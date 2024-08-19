import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the OpenAI API
      const response = await axios.post(
        "https://api.openai.com/v1/engines/davinci-codex/completions",
        {
          prompt: inputText,
          max_tokens: 50,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer YOUR_OPENAI_API_KEY`, // Replace with your OpenAI API key
          },
        },
      );

      // Pass the result to the Result component using the navigate function
      navigate("/result", {
        state: { outputText: response.data.choices[0].text },
      });
    } catch (error) {
      console.error("Error with the API request:", error);
    }
  };

  return (
    <div className="home-container">
      <h1>Welcome to CVLution</h1>
      <h3>
        Enter some information about your job, your role, daily tasks,
        meaningful projects, and quantifiable results for optimized and personal
        resume points
      </h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type or paste your text here..."
          rows="6"
          cols="40"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home;
