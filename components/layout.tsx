import GlobalMeta from './global-meta';

type Props = {
    preview?: boolean;
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <>
            <GlobalMeta />
            <main className="main-container">{children}</main>
        </>
    );
};

export default Layout;
