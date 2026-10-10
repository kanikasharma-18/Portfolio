import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const CONTACT_CHANNELS = [
  { label: 'GitHub', icon: FaGithub, detail: 'Profile not configured' },
  { label: 'LinkedIn', icon: FaLinkedin, detail: 'Profile not configured' },
  { label: 'Email', icon: FaEnvelope, detail: 'Address not configured' },
];

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }

    setStatus('success');
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-divider" aria-hidden="true" />
      <div className="contact-shell">
        <div className="contact-intro">
          <p className="contact-eyebrow">Get in touch</p>
          <h2 id="contact-heading">Let&apos;s Build Something Together.</h2>
          <p className="contact-description">
            Have an idea, a technical challenge, or an opportunity worth exploring? Send a note and
            let&apos;s start a thoughtful conversation about what we can build.
          </p>

          <div className="contact-channels" aria-label="Contact channels">
            {CONTACT_CHANNELS.map(({ label, icon: Icon, detail }) => (
              <div className="contact-channel" key={label}>
                <Icon aria-hidden="true" />
                <span>
                  <strong>{label}</strong>
                  <small>{detail}</small>
                </span>
              </div>
            ))}
          </div>
          <p className="contact-configuration-note">
            Social profiles and email will appear here once they are added to the portfolio data.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
          <div className="contact-form-row">
            <label>
              <span>Name</span>
              <input
                className="cursor-target"
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                required
                minLength={2}
              />
            </label>
            <label>
              <span>Email</span>
              <input
                className="cursor-target"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
            </label>
          </div>
          <label>
            <span>Subject</span>
            <input
              className="cursor-target"
              type="text"
              name="subject"
              placeholder="What would you like to build?"
              required
              minLength={3}
            />
          </label>
          <label>
            <span>Message</span>
            <textarea
              className="cursor-target"
              name="message"
              rows="6"
              placeholder="Tell me a little about your idea or opportunity..."
              required
              minLength={10}
            />
          </label>
          <div className="contact-form-footer">
            <button className="cursor-target contact-submit" type="submit">
              Send Message
              <span aria-hidden="true">-&gt;</span>
            </button>
            <p className="contact-status" aria-live="polite">
              {status === 'success'
                ? 'Your message is ready. Connect a form service in Contact.jsx to send it.'
                : 'Client-side validation only for now.'}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
