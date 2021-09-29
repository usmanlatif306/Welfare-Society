import React from "react";
import { useEffect } from "react";
import useStorage from "../hooks/useStorage";

export default function Url({ files, setfiles, setUrls, setProgress }) {
  const { progress, urls } = useStorage(files);
  // console.log(progress, urls);
  setProgress(progress);
  useEffect(() => {
    if (files.length === urls.length) {
      // setfiles([]);
      for (let i = 0; i < urls.length; i++) {
        var url = urls[i];
        setUrls((prevState) => [...prevState, url]);
      }
    }
  }, [urls]);
  // setUrl(url);
  // setProgress(progress);
  //   useEffect(() => {
  //     if (url) {
  //       setUrl(url);
  //     }
  //   }, [url]);
  return <div></div>;
}
