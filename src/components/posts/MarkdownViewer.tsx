'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CommonUtils } from '@/utils/common';

type MarkdownViewerProps = {
  content: string;
};

export default function MarkdownViewer({ content }: MarkdownViewerProps) {
  return (
    <ReactMarkdown
      className="prose max-w-none dark:text-neutral-100"
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="relative w-fit dark:text-neutral-200 max-md:text-lg after:absolute after:bg-sky-500 after:inline-block after:w-3 after:h-3 after:rounded-full after:bottom-0 after:-right-4 max-md:after:bottom-1 max-md:after:-right-3 max-md:after:w-2 max-md:after:h-2">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="relative w-fit dark:text-neutral-200 max-md:text-base after:absolute after:bg-sky-500 after:inline-block after:w-2 after:h-2 after:rounded-full after:bottom-1 after:-right-3 max-md:after:-right-2 max-md:after:w-1.5 max-md:after:h-1.5">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="dark:text-neutral-200  max-md:text-sm border-l-4 pl-2 border-l-teal-300">{children}</h3>
        ),
        h4: ({ children }) => <h4 className="dark:text-neutral-200">{children}</h4>,
        li: ({ children }) => <li className="dark:text-neutral-200 max-md:text-sm">{children}</li>,
        em: ({ children }) => <em className="dark:text-neutral-200 max-md:text-sm">{children}</em>,
        strong: ({ children }) => (
          <strong className="text-rose-500 dark:text-teal-500 max-md:text-sm">{children}</strong>
        ),
        blockquote: ({ children }) => (
          <blockquote className="bg-neutral-50 dark:bg-neutral-900 px-7 py-2 border-l-sky-500 rounded-md not-italic font-light">
            {children}
          </blockquote>
        ),
        p: ({ children }) => (
          <p className="dark:text-neutral-200 max-md:text-sm whitespace-pre-wrap font-light before:hidden">
            {children}
          </p>
        ),
        a: ({ children }) => <a className="text-neutral-500 max-md:text-sm cursor-pointer">{children}</a>,
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <SyntaxHighlighter language={match[1]} PreTag="div" {...rest} style={oneDark} ref={null}>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={CommonUtils.combineClassName(className, 'text-rose-500', 'dark:text-teal-500')}>
              {children}
            </code>
          );
        },
        img: image => <Image className="w-full" src={image.src || ''} alt={image.alt || ''} width={500} height={350} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
