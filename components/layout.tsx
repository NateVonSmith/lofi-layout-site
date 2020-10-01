import GlobalMeta from './global-meta';

type Props = {
    preview?: boolean;
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <>
            <GlobalMeta />
            <main>{children}</main>
        </>
    );
};

export default Layout;
