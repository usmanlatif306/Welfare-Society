import { useState, useEffect } from "react";
import { storage } from "../firebase";

const useStorage = (files) => {
  //   const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    files.map((file) => {
      const storageRef = storage.ref(Date.now() + "-" + file.name);
      storageRef.put(file).on(
        "state_changed",
        (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        },
        (err) => {
          setError(err);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          setUrls((prevState) => [...prevState, url]);
        }
      );
    });
    //   const storageRef = projectStorage.ref(files.name);
    //   storageRef.put(files).on(
    //     "state_changed",
    //     (snap) => {
    //       let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
    //       setProgress(percentage);
    //     },
    //     (err) => {
    //       setError(err);
    //     },
    //     async () => {
    //       const url = await storageRef.getDownloadURL();
    //       setUrl(url);
    //     }
    //   );
  }, [files]);
  return {
    progress,
    urls,
    error,
  };
};
export default useStorage;
