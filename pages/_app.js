import "@/styles/globals.css";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import { Fragment } from "react";

const App = ({ Component, pageProps })=>{
  return (<Fragment>
            <Head>
              <meta charSet="utf-8"></meta>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
          </Fragment>);
}

export default App;
