import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-8 text-primary">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mb-6 text-primary">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mb-4 text-primary">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold mb-4 text-primary">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="text-secondary mb-6 leading-relaxed">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-6 text-secondary space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-6 text-secondary space-y-2">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="text-secondary">{children}</li>,
    a: ({ children, href }) => (
      <a href={href} className="text-link hover:opacity-70 transition-opacity">
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent pl-4 my-6 text-secondary italic">
        {children}
      </blockquote>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="rounded-2xl my-8"
        {...(props as ImageProps)}
      />
    ),
    code: ({ children }) => (
      <code className="bg-secondary/10 rounded px-2 py-1 font-mono text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-secondary/10 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        {children}
      </pre>
    ),
    ...components,
  };
}
