import React from "react";
import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden @if ($attributes['background']) {{ $attributes['background'] }} @endif"
        x-ref="contentarea"
      >
        <Header />

        <main>{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
