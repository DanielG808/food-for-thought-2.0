import React from "react";

export default function CopyrightStatement() {
  return (
    <p className="text-sm">
      &copy;{new Date().getFullYear()} Food for Thought 2.0. All rights
      reserved.
    </p>
  );
}
