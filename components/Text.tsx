"use client";

import React from "react";

type Props = {
  text: string;
  loading?: boolean;
};

const Text = ({ text, loading = false }: Props) => {
  return (
    <div className="text-center">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-red-100 to-red-300 font-semibold text-xl md:text-3xl font-serif">
        {text}
      </h1>
    </div>
  );
};

export default Text;
