import { useState, CSSProperties } from "react";
import { PuffLoader, SyncLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Loading() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ff00ff");

  return (
    <div className="sweet-loading">
      <div className="invisible">
        <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
        <input
          value={color}
          onChange={(input) => setColor(input.target.value)}
          placeholder="Color of the loader"
        />
      </div>

      <PuffLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={1}
      />
    </div>
  );
}

export default Loading;
