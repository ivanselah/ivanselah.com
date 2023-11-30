import React from 'react';

type PostslayoutProps = {
  children: React.ReactNode;
};

export default function Postslayout({ children }: PostslayoutProps) {
  return <section>{children}</section>;
}
