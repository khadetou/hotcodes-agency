const Submenu = () => {
  return (
    <ul className="submenu dark:lg:border-transparent dark:lg:bg-[#2C3443]  hidden pt-5 transition-all duration-300 lg:invisible lg:absolute lg:top-[120%] lg:block lg:w-[350px] lg:rounded lg:border lg:bg-white lg:px-8 lg:pb-5 lg:text-left lg:opacity-0 lg:group-hover:visible group-hover:lg:top-full  group-hover:lg:opacity-100 ">
      <li>
        <a
          href="blog-grids.html"
          className="hover:!text-blue-color text-gray dark:hover:text-white  items-center inline-flex justify-center text-center font-lexend text-base"
        >
          Blog Grids
        </a>
      </li>
      <li>
        <a
          href="blog-details.html"
          className="hover:!text-blue-color text-gray dark:hover:text-white mt-5 items-center inline-flex justify-center text-center font-lexend text-base"
        >
          Blog Details
        </a>
      </li>
      <li>
        <a
          href="404.html"
          className="hover:!text-blue-color text-gray dark:hover:text-white mt-5 items-center inline-flex justify-center text-center font-lexend text-base"
        >
          404 Error
        </a>
      </li>
      <li>
        <a
          href="signin.html"
          className="hover:!text-blue-color text-gray dark:hover:text-white mt-5 items-center inline-flex justify-center text-center font-lexend text-base"
        >
          Sign In
        </a>
      </li>
      <li>
        <a
          href="signup.html"
          className="hover:!text-blue-color text-gray dark:hover:text-white mt-5 items-center inline-flex justify-center text-center font-lexend text-base"
        >
          Sign Up
        </a>
      </li>
    </ul>
  );
};

export default Submenu;
