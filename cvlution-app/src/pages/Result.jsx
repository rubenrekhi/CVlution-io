import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="result-container">
      <h2>Processed Text:</h2>
      <p>{location.state?.outputText}</p>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}

export default Result;
