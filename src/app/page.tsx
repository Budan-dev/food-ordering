import Footer from "./components/footer";
import Main from "./components/main";
import SideImageLayout from "./components/side-image-layout";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <SideImageLayout
        imageSrc="/welcomeImage.svg"
        imageAlt="Welcome Image Screen"
      >
        <Main />
      </SideImageLayout>

      <Footer />
    </div>
  );
}
