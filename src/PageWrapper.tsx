import Navbar from "./Navbar";

const appName = import.meta.env.VITE_APP_NAME ?? "ShopVite";
const appVersion = import.meta.env.VITE_APP_VERSION ?? "1.0.0";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-content">{children}</main>
      <footer className="footer">
        {appName} v{appVersion} — Built with React + Vite · Deployed via{" "}
        <a href="#">Deploxa</a>
      </footer>
    </div>
  );
};

export default PageWrapper;
