import TopBar from "./Header/TopBar";

const Layout = ({ children }) => {
  return (
    <div>
      <TopBar />
      {children}
    </div>
  );
};

export default Layout;
