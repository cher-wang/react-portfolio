import { ReactComponent as FooterText } from "../assets/footer_text.svg";
import { ReactComponent as FooterTextMobile } from "../assets/footer_text_mobile.svg";

const Component: React.VFC = () => {
  return (
    <div className="h-32 w-full flex items-center justify-center">
      <FooterText className="hidden md:block" />
      <FooterTextMobile className="md:hidden" />
    </div>
  );
};

export default Component;
