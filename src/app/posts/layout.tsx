import React from 'react';

type PostslayoutProps = {
  children: React.ReactNode;
};

console.log('object');

export default function Postslayout({ children }: PostslayoutProps) {
  console.log(123);

  return <section>{children}</section>;
}
