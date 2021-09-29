import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div className="w-100 text-center">
        <span>Copyright</span>
        <span className="ml-1">&copy; 2021 Usman Latif.</span>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
