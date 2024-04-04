import Footer from "@/components/footer";
import Header from "@/components/header";



export default function Layout({children}){

  return(
    <main>
      <Header/>
      {children}
      <Footer/>
    </main>
  )
}