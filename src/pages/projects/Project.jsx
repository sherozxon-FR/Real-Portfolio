import { useState, useRef } from 'react'
import styles from './Project.module.css'

function Project() {

  const [image, setImage] = useState(null)
  const [link, setLink] = useState("")
  const [bio, setBio] = useState("")
  const fileRef = useRef(null)

  const data = [
    { image, link, bio }
  ]

  const handeleForm = (e) => {
    e.preventDefault()
    console.log(data)

    setImage(null)
    setLink("")
    setBio("")
    fileRef.current.value = ""
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <p className={styles.title}>New Project</p>
        <form className={styles.form} onSubmit={handeleForm}>

          <label className={styles.fileLabel}>
            <svg className={styles.fileIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12V4m0 0L8 8m4-4l4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {image
              ? <span className={styles.fileName}>{image.name}</span>
              : <span>choose image</span>
            }
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className={styles.fileInput}
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </label>

          <input
            className={styles.input}
            type="text"
            placeholder='description'
            value={bio}
            required
            onChange={(e) => setBio(e.target.value)}
          />

          <input
            className={styles.input}
            type="text"
            placeholder='link'
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required

          />

          <button className={styles.button} type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Project


