import Footer from "@/components/footer";

export default function Layout({ children }) {
  return (
    <main>
      {children}
      <Footer />
      <svg xmlns="http://www.w3.org/2000/svg" id="texture" className="noise">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.5"
            numOctaves="3"
            stitchTiles="stitch"
          ></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)"></rect>
      </svg>
    </main>
  );
}
