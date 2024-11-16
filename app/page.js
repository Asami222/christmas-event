
import Image from "next/image";
import data from "./_components/data";
import EachSection from "./_components/eachSection";
import cx from "classnames";
import { Italiana, Square_Peg, M_PLUS_1p } from "next/font/google";
import styles from "./page.module.css"

const italiana = Italiana({ subsets: ["latin"], weight: ["400"] });
const square_peg = Square_Peg({ subsets: ["latin"], weight: ["400"] });
const m_plus_1p = M_PLUS_1p({ weight: ['400'], subsets: ["latin"] });


export default function Home() {
    return (
        <>
            <header className={styles.header}>
                <h1>
                    <Image
                        className={styles.logo}
                        src="/logo/logo.svg"
                        alt="中部百貨店"
                        width={152}
                        height={18}
                        sizes="(min-width: 152px) 152px, 11vw"
                    />
                </h1>
            </header>
            <main>
                <section className={styles.top}>
                    <h2>
                        <Image
                            className={styles.topTitle}
                            src="/hero/title.png"
                            alt="メリークリスマス"
                            width={1334}
                            height={266}
                            sizes="(min-width: 667px) 667px, 46.3vw"
                            priority
                        />
                    </h2>
                    <h3 className={styles.headingSub}>過去最高のクリスマスを自分自身や大切な人へ贈りましょう</h3>
                    <figure className={styles.hero}>
                        <Image
                            className={styles.heroImg}
                            src="/hero/cityimg.webp"
                            alt="クリスマスの街並み"
                            width={2880}
                            height={1352}
                            sizes="(min-width: 1440px) 1440px, 100vw"
                            priority
                        />  
                    </figure>
                    <div className={styles.copyContainer}>
                        <p>
                            <Image
                                src="/hero/treeLeft.webp"
                                alt="クリスマスツリー"
                                width={396}
                                height={934}
                                sizes="(min-width: 198px) 198px, 14vw"
                                style={{width: "100%", height: 'auto'}}
                            />
                        </p>
                        <div className={styles.copy}>
                            <p className={italiana.className}>11<span className={styles.narrow}>/</span>15<span className={styles.smallDate}>fri</span><span className={styles.dateLine}>-</span>12<span className={styles.narrow}>/</span>25<span className={styles.smallDate}>mon</span></p>
                            <p>中部百貨店クリスマスシーズン特別企画</p>
                            <p>中部百貨店が１年で最も力を入れているのがこのクリスマスの季節です。<br/>なぜならクリスマスは１年頑張った自分や大切な人へ労いができるから。<br/>サンタクロースが世界中へ届けるプレゼントの準備をするように、<br/>中部百貨店も世界各地から何ヶ月もかけてプレゼントを探して集めてきています。<br/>それはサンタクロースが子供たちの笑顔が見たいように、私たちもお客様の笑顔が見たいから。<br/>今年も最高の笑顔でクリスマスを迎えましょう！
                            </p>
                        </div>
                        <p>
                            <Image
                                src="/hero/treeRight.webp"
                                alt="クリスマスツリー"
                                width={342}
                                height={900}
                                sizes="(min-width: 171px) 171px, 12vw"
                                style={{width: "100%", height: 'auto'}}
                            />
                        </p>
                    </div>
                </section>
                <section className={styles.featureContainer}>
                    <h4>
                        <Image
                            src="/main/specialFeature.svg"
                            alt="目玉商品"
                            width={370}
                            height={97}
                            sizes="(min-width: 370px) 370px, 26vw"
                            style={{width: "100%", height: 'auto'}}
                        />
                        <span>目玉商品</span>
                    </h4>
                    <article className={styles.mainFlex}>
                        {data.contents.map((content,i) => (
                            <EachSection key={i} {...content} />
                        ))}
                    </article>
                </section>
                <article className={styles.cafeContainer}>
                        {data.bottom.map((content,i) => (
                            <EachSection key={i} {...content} />
                        ))}
                        <div className={styles.kidsanddog}>
                            <Image
                                src="/main/kidsanddog.webp"
                                alt="子供と犬"
                                width={680}
                                height={897}
                                sizes="(min-width: 340px) 340px, 24vw"
                                style={{width: "100%", height: 'auto'}}
                            />
                        </div>
                </article>
                <section className={styles.santaContainer}>
                    <h4>
                        <Image
                            src="/main/specialEvent.svg"
                            alt="スペシャルイベント"
                            width={500}
                            height={132}
                            sizes="(min-width: 500px) 500px, 35vw"
                        />
                    </h4>
                    <h5>サンタクロースへ手紙を送ってみませんか？</h5>
                    <div className={cx(styles.cardContainer, styles.shadow)}>
                        <div className={styles.cardTexts}>
                            <div className={styles.cardTitle}>
                                <div className={styles.letterScript}>
                                    <Image
                                        src="/main/santaclausScript.svg"
                                        alt="サンタクロースへの手紙"
                                        width={1120}
                                        height={330}
                                        sizes="(min-width: 560px) 560px, 39vw"
                                        style={{width: "100%", height: 'auto'}}
                                    />
                                </div>
                                <div className={styles.santaDate}>
                                    <p className={m_plus_1p.className}>期間限定</p>
                                    <p className={square_peg.className}>11/15<span>-</span>12/18</p>
                                </div>
                            </div>
                            <p className={m_plus_1p.className}>どなたでもご参加いただけますが期間に限りがあります。ご参加いただいた方にはグリーンランドのサンタクロースより素敵なお返事のカードが届きます。</p>
                        </div>
                        <div className={styles.santaIllustContainer}>
                            <p className={styles.candy}>
                                <Image
                                    src="/main/stripecandy.svg"
                                    alt="ストライプキャンディ"
                                    width={84}
                                    height={156}
                                    sizes="(min-width: 84px) 84px, 6vw"
                                    style={{width: "100%", height: 'auto'}}
                                />
                            </p>
                            <p className={styles.santaIllust}>
                                <Image
                                    src="/main/santaclaus.webp"
                                    alt="サンタクロース"
                                    width={1286}
                                    height={918}
                                    sizes="(min-width: 643px) 643px, 45vw"
                                    style={{width: "100%", height: 'auto'}}
                                />
                            </p>
                        </div>
                    </div>
                    <div className={styles.santaBottom}>
                        <div className={styles.doorContainer}>
                            <div className={styles.come}>
                                <Image 
                                    src="/main/come.svg" 
                                    alt="come on" 
                                    width={280}
                                    height={53}
                                    sizes="(min-width: 280px) 280px, 19.5vw"
                                    style={{width: "100%", height: 'auto'}}
                                />
                            </div>
                            <div className={styles.door}>
                                <Image
                                    src="/main/anime.png" 
                                    alt="ドアのイラスト" 
                                    width={500} 
                                    height={670}
                                    sizes="(min-width: 250px) 250px, 17.3vw"
                                    className={styles.apngImage}
                                    style={{width: "100%", height: 'auto'}} 
                                />
                            </div>
                        </div>
                        <div className={styles.santaImageflex}>
                            <p className={styles.santaImg}>
                                <Image 
                                    src="/main/santaImg.webp" 
                                    alt="サンタクロースの写真" 
                                    width={1165}
                                    height={757}
                                    sizes="(min-width: 500px) 500px, 35vw"
                                    className={styles.santaimgShadow}
                                />
                            </p>
                            <p className={styles.tonakaiImg}>
                                <Image 
                                    src="/main/tonakai.webp" 
                                    alt="トナカイの写真" 
                                    width={350} 
                                    height={227}
                                    sizes="(min-width: 350px) 350px, 24.3vw" 
                                    className={styles.santaimgShadow}
                                />
                            </p>
                        </div>
                    </div>
                </section>
                <p className={styles.copyright}><small>&copy;Copyright CHUBU department store. All rights reserved.</small></p>
            </main>
        </>
    )
}