import Head from 'next/head';
import FlexDemo from '../components/flex-demo';
import GridDemo from '../components/grid-demo';
import Layout from '../components/layout';
import PageMeta from '../components/page-meta';
// import { getSpotifyAuth, spotify } from '../utils/global/data/spotify';

// const DynamicLeaderboard = dynamic(() => import('../components/shared/leaderboards/leaderboards'), { ssr: false });
declare var process: any;

const Index = ({}) => {
    return (
        <>
            <PageMeta />
            <Layout>
                <Head>
                    <title>{process.env.APP_NAME}</title>
                </Head>
                <div className="page-content">
                    <FlexDemo />
                    <GridDemo />
                </div>
            </Layout>
        </>
    );
};

export default Index;
