import React, { FC, useEffect } from "react";

interface Props {
  widgetId: string;
}

export const Widget: FC<Props> = ({ widgetId }) => {
  const linkToEditor = `https://widget-staging.xp.network/?widget=true&wsettings=true&wid=${widgetId}`;
  const handleWidgetClick = () => {};
  return (
    <div className="widgetBox" onClick={handleWidgetClick}>
      <a href={linkToEditor} target="_blank">
        {widgetId}
      </a>
    </div>
  );
};
