import React from "react";
import { useState } from "react/cjs/react.development";
import { ImageGrid } from "./components/ImageGrid";
import { Modal } from "./components/Modal";
import { Title } from "./components/Title";
import { UploadForm } from "./components/Upload";

function App() {
  const [img, setImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setImg={setImg} />
      {img && <Modal img={img} setImg={setImg} />}
    </div>
  );
}

export default App;
