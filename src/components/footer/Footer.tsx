import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="footer_section_wrapper bg-grayish  ">
        <div className="footer_section_wrapper px-4 md:px-8 lg:px-6 flex gap-10 md:gap-20 flex-wrap  lg:justify-between max-w-[1100px] m-auto py-20  ">
          <div className="customer_row">
            <h1 className="text-lg font-bold">Customer Service</h1>
            <div className="footer_row_p_wrapper font-light mt-8 font-">
              <p className="footer_paragraph_item footer_phone_number">
                +866.587.2742
              </p>
              <p className="footer_paragraph_item">Live Chat</p>
              <Link href="about" className="">
                <p className="footer_paragraph_item inline">About Us</p>
              </Link>
              <p className="footer_paragraph_item">Terms & Conditions</p>
            </div>
          </div>

          <div className="company_row">
            <h1 className="text-lg font-bold">Company</h1>
            <div className="footer_row_p_wrapper mt-8 font-light">
              <p className="footer_paragraph_item">What We Do</p>
              <p className="footer_paragraph_item">Available Services</p>
              <p className="footer_paragraph_item">Latest Posts</p>
              <p className="footer_paragraph_item">FAQs</p>
            </div>
          </div>

          <div className="news_letter_row flex-1 max-w-[400px]">
            <h1 className="text-lg font-bold">Our Newsletter</h1>
            <div className=" mt-8 font-">
              <h3 className="font-light">
                Join our list and get 15% all first products!
              </h3>
              <form className=" footer_row_p_wrapper rounded-md overflow-hidden flex justify-between mt-6 bg-white shadow-sm">
                <input
                  className="  flex-[0.7] outline-none bg-transparent px-4 py-4 md:py-3 transition-colors duration-300 focus:bg-gray-50 "
                  type="email"
                  placeholder="Email address"
                />
                <button className=" flex-[0.3] bg-main_blue text-white px-2">
                  Subscribe
                </button>
              </form>
              <p className=" font-thin mt-2 text-sm ">
                *Don't worry, we don't spam.
              </p>
            </div>
          </div>
        </div>

        <div className="h-[2px] w-11/12 m-auto bg-gray-300"></div>
        <div className="flex gap-4 justify-end w-11/12 py-5">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fi fi-brands-facebook text-2xl"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fi fi-brands-twitter-alt text-2xl"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fi fi-brands-instagram text-2xl"></i>
          </a>
          <a
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fi fi-brands-pinterest text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
