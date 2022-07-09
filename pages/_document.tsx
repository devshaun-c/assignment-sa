import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { SheetsRegistry, JssProvider, createGenerateId } from "react-jss";

type Props = {
  pageProps: any;
};

class MyDocument extends Document<Props> {
  static getInitialProps = async (ctx: DocumentContext): Promise<any> => {
    const registry = new SheetsRegistry();
    const generateId = createGenerateId();
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => (props) =>
          (
            <JssProvider registry={registry} generateId={generateId}>
              <App {...props} />
            </JssProvider>
          ),
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
        </>
      ),
    };
  };

  render() {
    return (
      <Html>
        <Head>
          <link rel=" icon" href="/static/icons/favicon.svg"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;800&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
