import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './ContactPage.module.css'

// ─────────────────────────────────────────────────────────────
// To make this form work, create a free account at emailjs.com,
// then replace the three placeholder values below:
//   SERVICE_ID  — found in Email Services (e.g. "service_abc123")
//   TEMPLATE_ID — found in Email Templates (e.g. "template_xyz789")
//   PUBLIC_KEY  — found in Account > API Keys
// Your template should use variables: {{from_name}}, {{from_email}}, {{message}}
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_7z3poek'
const EMAILJS_TEMPLATE_ID = 'template_pqhez7o'
const EMAILJS_PUBLIC_KEY  = 'hWV30sQ3E3x0b-whe'

export default function ContactPage() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success')
        formRef.current.reset()
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className="navy-line" />
        <div className="section-heading">
          <h1>Contact</h1>
        </div>

        <div className={styles.layout}>
          <div className={styles.info}>
            <h3>Get in touch</h3>
            <p>
              Feel free to reach out about engineering roles, research collaborations,
              or just to say hello.
            </p>
            <ul className={styles.infoList}>
              <li>
                <span className={styles.infoKey}>Email</span>
                <a href="mailto:atharvp8@gmail.com">atharvp8@gmail.com</a>
              </li>
              <li>
                <span className={styles.infoKey}>Location</span>
                Bay Area, CA
              </li>
            </ul>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="from_name" className={styles.label}>Name</label>
              <input
                id="from_name"
                name="from_name"
                type="text"
                required
                placeholder="Your name"
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="from_email" className={styles.label}>Email</label>
              <input
                id="from_email"
                name="from_email"
                type="email"
                required
                placeholder="your@email.com"
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Your message..."
                className={styles.textarea}
              />
            </div>

            <button
              type="submit"
              className={styles.submit}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className={styles.successMsg}>Message sent! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className={styles.errorMsg}>Something went wrong. Please email me directly.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
