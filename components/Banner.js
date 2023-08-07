import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <>
      <div className={styles.bannerWrapper}>
        <div className={styles.banner}>
          <div className={styles.bannerCol}>
            <h1 className={styles.bannerTitle}>Code the North</h1>
          </div>
          <div className={styles.bannerCol}>
            <img
              src="/code-the-north.webp"
              alt="Code the North Logo"
              className={styles.bannerLogo}
            />
          </div>
          <div className={styles.bannerCol}>
            <div className={styles.bannerNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                className={styles.bannerNavIcon}
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
