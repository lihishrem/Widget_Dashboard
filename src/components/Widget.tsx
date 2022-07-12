import React, { FC, useEffect } from "react";

interface Props {
  widgetId: string;
}

export const Widget: FC<Props> = ({ widgetId }) => {
  const linkToEditor = `http://localhost:3001/?widget=true&wsettings=true&id=${widgetId}`;
  const handleWidgetClick = () => {};
  return (
    <div className="widgetBox" onClick={handleWidgetClick}>
      <a href={linkToEditor}>{widgetId}</a>
    </div>
  );
};
