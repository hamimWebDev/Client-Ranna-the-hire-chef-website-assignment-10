import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Ranna`;
  }, [title]);
};

export default useTitle;
