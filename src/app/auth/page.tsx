import AuthContainer from "./components/authContainer";
import SideImageLayout from "../components/side-image-layout";
import Footer from "../components/footer";

export default function AuthPage() {
  return (
    <div className="flex flex-col   w-full min-h-screen">
      <SideImageLayout
        imageSrc="/landing-Image.svg"
        imageAlt="Landing Image"
        bgColor="bg-[#F3F4F6]"
        hideImageOnMobile={true}
      >
        <AuthContainer />
      </SideImageLayout>

      <Footer />
    </div>
  );
}
