import { useState } from "react";

const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL ?? "support@shopvite.io";
const appEnv = import.meta.env.VITE_APP_ENV ?? "development";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-layout">
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          Have a question about a product, your order, or want to learn more
          about how this demo works? We'd love to hear from you.
        </p>

        <div className="contact-detail">
          <span className="icon">📧</span>
          <span>{supportEmail}</span>
        </div>
        <div className="contact-detail">
          <span className="icon">🌍</span>
          <span>shopvite.io — deployed via Deploxa</span>
        </div>
        <div className="contact-detail">
          <span className="icon">⚙️</span>
          <span>Environment: {appEnv}</span>
        </div>
      </div>

      <div className="contact-form">
        {submitted ? (
          <div className="form-success">
            <div className="success-icon">✅</div>
            <h3>Message Sent!</h3>
            <p>
              Thanks for reaching out. We'll get back to you at{" "}
              <strong>{form.email}</strong> shortly.
            </p>
            <button
              className="btn btn-outline"
              style={{ marginTop: "1.5rem" }}
              onClick={() => {
                setSubmitted(false);
                setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
              }}
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Jane"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a topic…</option>
                <option value="order">Order enquiry</option>
                <option value="product">Product question</option>
                <option value="demo">Demo / deployment</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us what's on your mind…"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              Send Message →
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
