'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CommonUtils } from '@/utils/common';

type MarkdownViewerProps = {
  content: string,
};

export default function MarkdownViewer({ content }: MarkdownViewerProps) {
  return (
    <ReactMarkdown
      className="prose max-w-none dark:text-neutral-100"
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="dark:text-neutral-200">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="dark:text-neutral-200">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="dark:text-neutral-200">{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className="dark:text-neutral-200">{children}</h4>
        ),
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag="div"
              {...rest}
              style={oneDark}
              ref={null}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code
              {...rest}
              className={CommonUtils.combineClassName(
                className,
                'text-rose-500',
                'dark:text-teal-500',
              )}
            >
              {children}
            </code>
          );
        },
        img: image => (
          <Image
            src={image.src || ''}
            alt={image.alt || ''}
            width={500}
            height={350}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
