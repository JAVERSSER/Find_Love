import { useState } from "react";

export default function RangeInput() {
  const [value, setValue] = useState(40);

  return (
    <div className="w-full flex justify-center">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-3/4"
      />
    </div>
  );
}
