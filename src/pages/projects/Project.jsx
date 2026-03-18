// import { useState, useRef } from 'react'
// import styles from './Project.module.css'

// function Project() {

//   const [image, setImage] = useState(null)
//   const [link, setLink] = useState("")
//   const [bio, setBio] = useState("")
//   const fileRef = useRef(null)

//   const data = [
//     { image, link, bio }
//   ]

//   const handeleForm = (e) => {
//     e.preventDefault()
//     console.log(data)

//     setImage(null)
//     setLink("")
//     setBio("")
//     fileRef.current.value = ""
//   }

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.card}>
//         <p className={styles.title}>New Project</p>
//         <form className={styles.form} onSubmit={handeleForm}>

//           <label className={styles.fileLabel}>
//             <svg className={styles.fileIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//               <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12V4m0 0L8 8m4-4l4 4" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//             {image
//               ? <span className={styles.fileName}>{image.name}</span>
//               : <span>choose image</span>
//             }
//             <input
//               ref={fileRef}
//               type="file"
//               accept="image/*"
//               className={styles.fileInput}
//               onChange={(e) => setImage(e.target.files[0])}
//               required
//             />
//           </label>

//           <input
//             className={styles.input}
//             type="text"
//             placeholder='description'
//             value={bio}
//             required
//             onChange={(e) => setBio(e.target.value)}
//           />

//           <input
//             className={styles.input}
//             type="text"
//             placeholder='link'
//             value={link}
//             onChange={(e) => setLink(e.target.value)}
//             required

//           />

//           <button className={styles.button} type='submit'>Submit</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Project

import React from 'react'

function Project() {
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem maxime optio qui deserunt repellendus sit dolorum excepturi doloremque corrupti. Hic perferendis accusamus quae dolor, rem eum totam, tempora, iste ea nostrum voluptatibus voluptatum accusantium officiis nihil veritatis? Dicta deserunt suscipit dolor quaerat, molestiae corrupti sit modi similique natus velit at! Consequatur quisquam nam, consequuntur placeat mollitia, excepturi aliquam impedit harum dolores, fugiat laborum quibusdam quaerat nobis ea cupiditate. Ad culpa corporis odio tempore, esse quibusdam illum magnam nostrum commodi facilis a optio dicta ab repudiandae libero. Officiis nemo vero neque vitae. Dolorem eligendi, aliquam amet voluptatum explicabo ipsam temporibus quasi in accusantium eaque blanditiis ducimus magni voluptates officiis nihil consequuntur consectetur atque deserunt iusto maxime vitae iste quo. Provident aliquid, culpa quidem eligendi atque placeat molestias in rem ex, sunt quis! Quisquam optio inventore esse eum ratione dolorum voluptatem aliquid, tempore unde repellendus pariatur iusto beatae deleniti debitis similique eos.
    </div>
  )
}

export default Project