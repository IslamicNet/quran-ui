import TopBar from "./Header/TopBar";

const Layout = ({ children }) => {
  return (
    <div>
      <TopBar />
      <main style={{ padding: 24 }}>{children}</main>
    </div>
  );
};

export default Layout;
