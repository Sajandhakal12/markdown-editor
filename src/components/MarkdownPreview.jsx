import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const MarkdownPreview = ({ value }) => {
  return (
    <div className="content-item ">
      <div className="preview-container" id="preview">
        <ReactMarkdown
          children={value}
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
          components={{
            ul: ({ className, ...props }) => (
              <ul
                className={
                  className ? `preview-list ${className}` : `preview-list`
                }
                {...props}
              />
            ),
            ol: ({ ...props }) => (
              <ol className="preview-list-item" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className={`preview-list-item`} {...props} />
            ),
            p: ({ ...props }) => <p className="preview-block" {...props} />,
            h1: ({ ...props }) => <h1 className="preview-block" {...props} />,
            h2: ({ ...props }) => <h2 className="preview-block" {...props} />,
            h3: ({ ...props }) => <h3 className="preview-block" {...props} />,
            h4: ({ ...props }) => <h4 className="preview-block" {...props} />,
            h5: ({ ...props }) => <h5 className="preview-block" {...props} />,
            h6: ({ ...props }) => <h6 className="preview-block" {...props} />,
            code: ({ node, inline, className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={atomDark}
                  wrapLongLines={true}
                  showLineNumbers={true}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
            table: ({ ...props }) => (
              <table className="preview-table" {...props} />
            ),
            tr: ({ ...props }) => <tr className="preview-tr" {...props} />,
            th: ({ ...props }) => <th className="preview-th" {...props} />,
            td: ({ ...props }) => <td className="preview-td" {...props} />,
          }}
        />
      </div>
    </div>
  );
};

export default MarkdownPreview;
