import React, { useState } from "react";

function rot13(str) {
  return str.replace(/[a-zA-Z]/g, (c) =>
    String.fromCharCode(
      c.charCodeAt(0) + (c.toLowerCase() <= 'm' ? 13 : -13)
    )
  );
}

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setInput(text);
    setOutput(rot13(text));
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-xl w-full space-y-6">
        <h1 className="text-4xl font-bold text-center text-lime-400">ROT13 Encoder</h1>
        <textarea
          className="w-full p-4 bg-zinc-900 text-white rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-lime-400"
          rows={5}
          placeholder="Escribe tu texto aquí..."
          value={input}
          onChange={handleChange}
        />
        <div className="bg-zinc-800 p-4 rounded-xl text-lime-300 shadow-md min-h-[120px]">
          {output || "Aquí aparecerá el texto cifrado..."}
        </div>
      </div>
    </div>
  );
}