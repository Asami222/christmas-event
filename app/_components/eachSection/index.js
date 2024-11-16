import Image from "next/image";
import { M_PLUS_1p } from "next/font/google";
import cx from "classnames";
import styles from "./index.module.css";

const m_plus_1p = M_PLUS_1p({ weight: ['400'], subsets: ["latin"] })

export default function EachSection({id, floor, title, subtitle, text, image, image2, ribonUrl, cafeUrl}) {
    return (
        <section className={styles.wrapper}>
        { ribonUrl &&
            <div className={styles.ribon}>
                <Image
                 src={ribonUrl}
                 alt={title}
                 width={750}
                 height={242}
                 sizes="(min-width: 750px) 750px, 52vw"
                />
            </div>
        }
        { cafeUrl &&
            <div className={styles.cafeHead}>
                <Image
                 src={cafeUrl}
                 alt={title}
                 width={587}
                 height={100}
                 sizes="(min-width: 587px) 587px, 41vw"
                />
            </div>
        }
        <div className={cx(styles.product, styles.shadow, styles[`${id}`])}>
            <div className={styles.text}>
                <p>{floor}</p>
                <h5>{title}{subtitle && <span>{subtitle}</span>}</h5>
                <p className={m_plus_1p.className}>{text}</p>
            </div>
            <div className={styles.img}>
                <Image
                 src={image.src}
                 alt={image.alt}
                 width={image.width}
                 height={image.height}
                 sizes={image.sizes}
                />
            </div>
        </div>
        </section>
    )
}