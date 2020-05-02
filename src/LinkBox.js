import React from "react";
import './LinkBox.scss';

export default function LinkBox(props) {
  const url = props.url;
  const backgroundColor = props.backgroundColor;
  const textColor = props.textColor;
  const heading = props.heading;
  const text = props.text;

  const styles = {
    LinkBox: {
      backgroundColor: backgroundColor,
      color: textColor
    },
  };
  return (
    <React.Fragment>
        {url && (
            <a href={url} className="LinkBox" style={styles.LinkBox}>
                <h2>
                    {heading ? heading : url}
                </h2>
                {text && (
                    <p>{text}</p>
                )}
            </a>
        )}
    </React.Fragment>
  );
}

// LinkBox.defaultProps = {
//   textColor: "white",
// };
