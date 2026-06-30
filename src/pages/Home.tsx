import { Link } from "react-router-dom";

const appName = import.meta.env.VITE_APP_NAME ?? "ShopVite";
const appEnv = import.meta.env.VITE_APP_ENV ?? "development";
const apiUrl = import.meta.env.VITE_API_URL ?? "";
const appVersion = import.meta.env.VITE_APP_VERSION ?? "1.0.0";
const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL ?? "";

const features = [
  {
    icon: "🛒",
    colorClass: "purple",
    title: "Product Explorer",
    desc: "Browse a live product catalog fetched from a real REST API with category filtering and instant search.",
  },
  {
    icon: "🔀",
    colorClass: "cyan",
    title: "Client-side Routing",
    desc: "Seamless navigation between pages using React Router v7 — no full-page reloads, instant transitions.",
  },
  {
    icon: "⚙️",
    colorClass: "green",
    title: "Environment Config",
    desc: "All runtime settings are injected via Vite env variables — zero hardcoded values, deploy-ready.",
  },
];

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-label">⚡ Powered by Vite + React + TypeScript</div>
        <h1>Welcome to {appName}</h1>
        <p>
          A fast, modern storefront demo showcasing routing, live API data, and
          environment-driven configuration — ready to deploy.
        </p>
        <div className="hero-actions">
          <Link to="/products" className="btn btn-primary">
            Browse Products →
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>
      </section>

      <div className="features">
        {features.map((f) => (
          <div className="feature-card" key={f.title}>
            <div className={`feature-icon ${f.colorClass}`}>{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="env-strip">
        <div className="env-item">
          <label>App Name</label>
          <span>{appName}</span>
        </div>
        <div className="env-item">
          <label>Environment</label>
          <span>{appEnv}</span>
        </div>
        <div className="env-item">
          <label>Version</label>
          <span>v{appVersion}</span>
        </div>
        <div className="env-item">
          <label>API URL</label>
          <span>{apiUrl}</span>
        </div>
        <div className="env-item">
          <label>Support</label>
          <span>{supportEmail}</span>
        </div>
      </div>
    </>
  );
};

export default Home;
