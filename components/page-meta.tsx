import { NextSeo } from 'next-seo';

const PageMeta = () => {
    const defaultTitle = 'defaultTitle';
    const defaultDescription: string = defaultTitle;

    return (
        <>
            <NextSeo
                {...{
                    title: defaultTitle,
                    description: defaultDescription,
                    openGraph: {
                        type: 'website',
                        title: defaultTitle,
                        description: defaultDescription
                        // url: PUBLIC_CONST.url,
                        // images: [{ src: LOGO.srcLrg, alt: LOGO.alt }]
                    }
                }}
            />
            {/* <Head>{seoConfig.keywords && <meta name="keywords" content={seoConfig.keywords} />}</Head> */}
        </>
    );
};

export default PageMeta;
