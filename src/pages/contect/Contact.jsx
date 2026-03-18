import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  const contacts = [
    { icon: '✦', label: 'Email', value: 'hello@example.com' },
    { icon: '◈', label: 'Telefon', value: '+998 90 000 00 00' },
    { icon: '⬡', label: 'Manzil', value: 'Toshkent, O\'zbekiston' },
  ];

  return (
    <div className={styles.page}>
      {/* Ambient blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />

      <div className={styles.container}>
        {/* Left panel */}
        <div className={styles.left}>
          <span className={styles.eyebrow}>Bog'lanish</span>
          <h1 className={styles.heading}>
            Sizning<br />
            <span className={styles.accent}>g'oyangiz</span><br />
            bizni kutmoqda
          </h1>
          <p className={styles.desc}>
            Savol, taklif yoki hamkorlik haqida so'z bo'lsin — biz har doim quloq tutamiz.
          </p>

          <div className={styles.contactList}>
            {contacts.map((c) => (
              <div className={styles.contactItem} key={c.label}>
                <span className={styles.contactIcon}>{c.icon}</span>
                <div>
                  <div className={styles.contactLabel}>{c.label}</div>
                  <div className={styles.contactValue}>{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel — form */}
        <div className={styles.right}>
          <div className={styles.formCard}>
            {sent ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>✓</div>
                <h3 className={styles.successTitle}>Xabar yuborildi!</h3>
                <p className={styles.successText}>Tez orada siz bilan bog'lanamiz.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>Xabar qoldiring</h2>
                </div>

                {[
                  { name: 'name', label: 'Ismingiz', type: 'text', placeholder: 'Alisher Navoiy' },
                  { name: 'email', label: 'Email', type: 'email', placeholder: 'siz@misol.com' },
                ].map((field) => (
                  <div
                    key={field.name}
                    className={`${styles.fieldWrap} ${focused === field.name ? styles.fieldFocused : ''}`}
                  >
                    <label className={styles.label}>{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className={styles.input}
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused('')}
                      required
                    />
                    <span className={styles.fieldLine} />
                  </div>
                ))}

                <div className={`${styles.fieldWrap} ${focused === 'message' ? styles.fieldFocused : ''}`}>
                  <label className={styles.label}>Xabar</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Savolingizni yozing..."
                    className={styles.textarea}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    rows={4}
                    required
                  />
                  <span className={styles.fieldLine} />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  <span className={styles.btnText}>Yuborish</span>
                  <span className={styles.btnArrow}>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;