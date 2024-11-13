import Image from "next/image";
import { M_PLUS_1p } from "next/font/google";
import cx from "classnames";
import styles from "./index.module.css";

const m_plus_1p = M_PLUS_1p({ weight: ['400'], subsets: ["latin"] })

export default function EachSection({id, floor, title, subtitle, text, image, image2}) {
    return (
        <section className={cx(styles.product, styles.shadow, styles[`${id}`])}>
            <div className={styles.text}>
                { image2 && 
                  <div className={styles.cookie}>
                    <Image
                        src={image2.src}
                        alt={image2.alt}
                        width={image2.width}
                        height={image2.height}
                        sizes={image2.sizes}
                    />
                  </div>
                }
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
        </section>
    )
}