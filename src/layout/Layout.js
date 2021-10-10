import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ padding: 24 }}>{children}</main>
    </div>
  );
};

export default Layout;
