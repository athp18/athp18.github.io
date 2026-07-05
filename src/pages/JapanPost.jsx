import styles from './JapanPost.module.css'

const photos = [
  { src: '/images/japan/IMG_7599.jpg', caption: 'A life-changing bowl of unagi rice.' },
  { src: '/images/japan/IMG_7663.jpg' },
  { src: '/images/japan/IMG_7636.jpg' },
  { src: '/images/japan/IMG_7524.jpg' },
  { src: '/images/japan/IMG_7549.jpg' },
  { src: '/images/japan/IMG_7598.jpg' },
]

export default function JapanPost() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className="navy-line" />
        <div className={styles.meta}>
          <span className={styles.tag}>Travel</span>
          <span className={styles.date}>Jul 2026</span>
        </div>
        <h1 className={styles.title}>Tokyo</h1>

        <div className={styles.body}>
          <p>
            I had known for a while that I wanted to do a graduation trip overseas, but the destination was
            always changing. When I decided to go to Japan, I was excited but also a little
            apprehensive -- outside of visiting my family in India, I have never left the country.
            To be completely honest, I arrived in Japan with almost no expectations. My friend and I
            had not really planned our trip, outside of deciding dates and where to stay, and I
            didn't know much about Tokyo (or Japan, to be honest) beyond its public image as a
            bustling urban city.
          </p>
          <p>
            I think this yielded great results. I'm still in Japan for another 6 days, but Tokyo
            has left me eager to see the rest of the country and fascinated by Japan's culture,
            history, food, media, and norms. I had so many great moments here, seeing urban wards like Shibuya and Shinjuku as well as the most historical/religious areas like Azakusa or Euno Park (my favorite). I absolutely loved Tokyo National Museum, and I really got to experience some highlights of this city. I love izakaya culture, and just the general feeling
            of openness here: people are warm and polite, and even without an itinerary, I never
            ran out of things to do. Tokyo really has everything, and I really enjoyed my time here.
            A few of my favorite photos and moments below.
          </p>
        </div>

        <div className={styles.grid}>
          {photos.map((photo, i) => (
            <figure key={i} className={`${styles.figure} ${photo.caption ? styles.full : ''}`}>
              <img src={photo.src} alt="" className={styles.img} loading="lazy" />
              {photo.caption && <figcaption className={styles.caption}>{photo.caption}</figcaption>}
            </figure>
          ))}
        </div>

        <div className={styles.music}>
          <p className={styles.musicLabel}>
            A band I discovered in Japan- they have a cult following outside Japan that I never
            knew about. This song has such beautiful lyrics, it sounds so carefree and playful.
          </p>
          <div className={styles.videoWrap}>
            <iframe
              src="https://www.youtube.com/embed/gGPBLwvU3ko"
              title="Music video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.video}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
