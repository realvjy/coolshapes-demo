import Footer from "@/components/footer";

export default function Layout({ children }) {
  return (
    <main>
      {children}
        <svg xmlns="http://www.w3.org/2000/svg" id="texture" className="noise">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".8"
              numOctaves="4"
              stitchTiles="stitch"
            ></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
      <Footer/>
    </main>
  );
}
