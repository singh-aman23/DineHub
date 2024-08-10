import Link from "next/link";
import ImageSlideshow from "@/components/images/image-slideshow";
import css from '@/app/page.module.css';

export default function Home() {
  return (
    <>
      <header className = {css.header}>
        <div className = {css.slideshow}>
          <ImageSlideshow/>
        </div>
        <div>
          <div className = {css.hero}>
            <h1>DineHub </h1>
            <p>Taste and share food from all over the world</p>
          </div>
          <div className = {css.cta}>
            <Link href = '/community'>Join the Community</Link>
            <Link href = "/meals">Explore meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={css.section}>
          <h2>How it works</h2>
          <p>
            DineHub is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            DineHub is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={css.section}>
          <h2>Why DineHub?</h2>
          <p>
            DineHub is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            DineHub is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
    
  );
}
