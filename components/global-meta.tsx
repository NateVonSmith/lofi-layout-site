import Head from 'next/head';

declare var process: any;

const GlobalMeta = () => {
    return (
        <Head>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta httpEquiv="cleartype" content="on" />
            <meta name="msapplication-TileColor" content={process.env.THEME.PRIMARY} />
            <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
            <meta name="theme-color" content={process.env.THEME.PRIMARY} />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color={process.env.THEME.PRIMARY} />
            <link rel="shortcut icon" href="/favicon/favicon.ico" />
            <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </Head>
    );
};

export default GlobalMeta;
