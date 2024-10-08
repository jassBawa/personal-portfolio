import { Html, Head, Main, NextScript } from 'next/document'

// Type Declation For TSX

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "widget-web-component": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        projectid: string;
      };
    }
  }
}


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        
        <Main />
        <NextScript />

        <div style={{ position: "fixed", bottom: "50px", right: "20px" }}>
          <widget-web-component projectid="cm0p8ycs90001dilpl9aogcop"></widget-web-component>
        </div>

      <script async src="https://opinify-widget-w24d.vercel.app/widget.umd.js"></script>
      </body>
    </Html>
  )
}
