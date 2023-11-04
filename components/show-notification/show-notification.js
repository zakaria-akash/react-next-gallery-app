import { useContext } from "react";
import ImageContext from "@/store/image-context";

import classes from "./show-notification.module.css";

const Notification = (props) => {
  const ImageCtx = useContext(ImageContext);

  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "added") {
    statusClasses = classes.added;
  }

  if (status === "removed") {
    statusClasses = classes.removed;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={ImageCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
