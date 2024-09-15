import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = () => {
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/28210169/pexels-photo-28210169/free-photo-of-a-small-house-on-a-hillside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img}/>
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat optio aspernatur a id consequatur reiciendis perferendis, dolor itaque ullam neque. Est at excepturi corrupti neque tempore provident eum suscipit hic?</p>
                <Link className={styles.link} href="/blog/post">READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard