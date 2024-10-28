import React, { useState, useEffect } from "react";
import Compressor from "compressorjs";

const FileUpload = ({
  files,
  setFiles,
  setOpenGeneratedFile,
  nfts,
  description,
}) => {
  const [openUploader, setOpenUploader] = useState(false);
  const [notification, setNotification] = useState("");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedFiles =
      JSON.parse(localStorage.getItem("LOCAL_STORAGE_FILE")) || [];
    if (savedFiles.length > 0) {
      setFiles(savedFiles.reverse());
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("LOCAL_STORAGE_FILE", JSON.stringify(files));
    }
  }, [files, isInitialized]);

  const handleFiles = (newFiles) => {
    const fileArray = Array.from(newFiles).map((file) => {
      if (file.type.startsWith("image/")) {
        return new Promise((resolve) => {
          new Compressor(file, {
            quality: 0.6,
            success(result) {
              fileToBase64(result).then((base64File) => {
                resolve({
                  name: nfts.name,
                  description: nfts.description,
                  category: nfts.category,
                  uploadType: "User Uploaded",
                  size: file.size,
                  type: file.type,
                  base64: base64File,
                });
              });
            },
            error(err) {
              console.log(err.message);
              resolve(null);
            },
          });
        });
      } else {
        return fileToBase64(file).then((base64File) => ({
          name: file.name,
          size: file.size,
          type: file.type,
          base64: base64File,
        }));
      }
    });

    Promise.all(fileArray).then((base64Files) => {
      setFiles((prevFiles) => [...prevFiles, ...base64Files.filter(Boolean)]);
    });
  };

  const handleFileChange = (e) => {
    handleFiles(e.target.files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const removeFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  const retrieveFile = (event) => {
    const data = event.target.files[0];

    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);

    reader.onloadend = () => {
      setFile(event.target.files[0]);
    };

    event.preventDefault();
  };

  useEffect(() => {
    const { name, description } = nfts;
    if (name && description) {
      setOpenUploader(true);
    }
  }, [nfts]);

  console.log(nfts);

  return (
    <div className="upload-container">
      {openUploader && (
        <div
          className="upload-area"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => document.getElementById("fileInput").click()}
        >
          <p>Drag and drop your files here or click to select files</p>
          <input
            type="file"
            id="fileInput"
            multiple
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
      )}

      <div className="file-list">
        {files.map((file, index) => (
          <div className="file-item" key={index}>
            {file?.type?.startsWith("image/") && (
              <img src={file.base64} alt="Preview" />
            )}
            <div className="file-details">
              <span>Name: {file?.name || "Unknown"}</span>
              <span>Size: {(file?.size / 1024).toFixed(2)} KB</span>
              <span>Type: {file?.type || "Unknown"}</span>
            </div>
            <div className="file-actions">
              <button onClick={() => setOpenGeneratedFile(file)}>
                <i className="fas fa-upload">View</i>
              </button>
              <button onClick={() => removeFile(index)}>
                <i className="fas fa-trash">Delete</i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
