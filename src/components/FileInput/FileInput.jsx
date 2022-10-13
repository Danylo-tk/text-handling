import { useState } from "react";
import styled from "styled-components";

const FileContent = styled.div`
  width: 60%;
`;

function FileInput() {
  const [file, setFile] = useState("");
  const [countCh, setCountCh] = useState(0);

  function uploadFile(e) {
    let reader = new FileReader();
    reader.onloadend = function () {
      const file = reader.result;
      setFile(file);
      setCountCh(file.match(/,/g)?.length);
    };
    reader.readAsText(e.target.files[0]);
  }

  return (
    <>
      <h1>Upload your file here:</h1>
      <input type="file" name="" id="" onChange={uploadFile} />
      {countCh}
      <FileContent>{file}</FileContent>
    </>
  );
}

export default FileInput;
