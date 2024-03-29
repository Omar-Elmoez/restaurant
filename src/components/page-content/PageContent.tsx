/* eslint-disable react/prop-types */
import { PropsWithChildren } from "react";
import classes from "./PageContent.module.css";

const PageContent: React.FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => {
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default PageContent;
