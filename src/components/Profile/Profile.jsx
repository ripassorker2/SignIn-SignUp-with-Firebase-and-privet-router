import React from "react";

const Profile = () => {
  return (
    <div>
      <section>
        {/* <!-- component --> */}
        <link
          rel="stylesheet"
          href="https://cdn.tailgrids.com/tailgrids-fallback.css"
        />

        {/* <!-- ====== Blog Section Start --> */}
        <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
          <div className="container">
            <div className="flex flex-wrap justify-center -mx-4">
              <div className="w-full px-4">
                <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                  <span className="font-semibold text-lg text-primary mb-2 block">
                    Our Blogs
                  </span>
                  <h2
                    className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                  >
                    Our Recent News
                  </h2>
                  <p className="text-base text-body-color">
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="max-w-[370px] mx-auto mb-10">
                  <div className="rounded overflow-hidden mb-8">
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                      alt="image"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <span
                      className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                    >
                      Dec 22, 2023
                    </span>
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                      >
                        Meet AutoManage, the best AI management tools
                      </a>
                    </h3>
                    <p className="text-base text-body-color">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="max-w-[370px] mx-auto mb-10">
                  <div className="rounded overflow-hidden mb-8">
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                      alt="image"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <span
                      className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                    >
                      Mar 15, 2023
                    </span>
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                      >
                        How to earn more money as a wellness coach
                      </a>
                    </h3>
                    <p className="text-base text-body-color">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="max-w-[370px] mx-auto mb-10">
                  <div className="rounded overflow-hidden mb-8">
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg"
                      alt="image"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <span
                      className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                    >
                      Jan 05, 2023
                    </span>
                    <h3>
                      <a
                        href="https://img.freepik.com/free-photo/teenager-dressed-white-t-shirt-using-virtual-reality-glasses-with-graph-charts-numbers-lines-technology-concept_613910-5097.jpg?w=996&t=st=1665917849~exp=1665918449~hmac=f5333bf6eb9eef6ea7142911b82d7093d81ca244ac35cd6bd2b62fe6485fc8c9
                        "
                      >
                        The no-fuss guide to upselling and cross selling
                      </a>
                    </h3>
                    <p className="text-base text-body-color">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ====== Blog Section End --> */}
      </section>
      {/* <!-- component --> */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
          <div>
            <span className="text-gray-600 text-lg font-semibold">
              Main features
            </span>
            <h2 className="mt-4 text-2xl text-gray-900 font-bold md:text-4xl">
              A technology-first approach to payments{" "}
              <br className="lg:block" hidden /> and finance
            </h2>
          </div>
          <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <img
                  src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                    First feature
                  </h5>
                  <p className="text-sm text-gray-600">
                    Neque Dolor, fugiat non cum doloribus aperiam voluptates
                    nostrum.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex justify-between items-center group-hover:text-yellow-600"
                >
                  <span className="text-sm">Read more</span>
                  <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    &RightArrow;
                  </span>
                </a>
              </div>
            </div>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <img
                  src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                    Second feature
                  </h5>
                  <p className="text-sm text-gray-600">
                    Neque Dolor, fugiat non cum doloribus aperiam voluptates
                    nostrum.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex justify-between items-center group-hover:text-yellow-600"
                >
                  <span className="text-sm">Read more</span>
                  <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    &RightArrow;
                  </span>
                </a>
              </div>
            </div>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <img
                  src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                    Third feature
                  </h5>
                  <p className="text-sm text-gray-600">
                    Neque Dolor, fugiat non cum doloribus aperiam voluptates
                    nostrum.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex justify-between items-center group-hover:text-yellow-600"
                >
                  <span className="text-sm">Read more</span>
                  <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    &RightArrow;
                  </span>
                </a>
              </div>
            </div>
            <div className="relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
              <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                <img
                  src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                    More features
                  </h5>
                  <p className="text-sm text-gray-600">
                    Neque Dolor, fugiat non cum doloribus aperiam voluptates
                    nostrum.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex justify-between items-center group-hover:text-yellow-600"
                >
                  <span className="text-sm">Read more</span>
                  <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    &RightArrow;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second  */}

      {/* <!-- component --> */}
      <section>
        <div className="container max-w-full mx-auto py-24 px-6">
          <h1 className="text-center text-4xl text-black font-medium leading-snug tracking-wider">
            Pricing
          </h1>
          <p className="text-center text-lg text-gray-700 mt-2 px-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
          <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>

          <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
            <div className="relative block flex flex-col md:flex-row items-center">
              <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
                <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                  <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                    <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                      Hobby
                    </h1>
                    <h2 className="text-sm text-gray-500 text-center pb-6">
                      FREE
                    </h2>
                    Stripe offers everything needed to run an online business at
                    scale. Get in touch for details.
                  </div>

                  <div className="flex flex-wrap mt-3 px-6">
                    <ul>
                      <li className="flex items-center">
                        <div className=" rounded-full p-2 fill-current text-green-700">
                          <svg
                            className="w-6 h-6 align-middle"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span className="text-gray-700 text-lg ml-3">
                          No setup
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className=" rounded-full p-2 fill-current text-green-700">
                          <svg
                            className="w-6 h-6 align-middle"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span className="text-gray-700 text-lg ml-3">
                          No setups
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className=" rounded-full p-2 fill-current text-green-700">
                          <svg
                            className="w-6 h-6 align-middle"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span className="text-gray-700 text-lg ml-3">
                          Speed
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="block flex items-center p-8  uppercase">
                    <button
                      className="mt-3 text-lg font-semibold 
	bg-black w-full text-white rounded-lg 
	px-6 py-3 block shadow-xl hover:bg-gray-700"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg">
                <div className="text-sm leading-none rounded-t-lg bg-gray-200 text-black font-semibold uppercase py-4 text-center tracking-wide">
                  Most Popular
                </div>
                <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                  <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                    Expert
                  </h1>
                  <h2 className="text-sm text-gray-500 text-center pb-6">
                    <span className="text-3xl">€19</span> /mo
                  </h2>
                  Stripe offers everything needed to run an online business at
                  scale. Get in touch for details.
                </div>
                <div className="flex pl-12 justify-start sm:justify-start mt-3">
                  <ul>
                    <li className="flex items-center">
                      <div className="rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">
                        No setup
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">
                        Hidden fees
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">
                        Original
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="block flex items-center p-8  uppercase">
                  <button
                    className="mt-3 text-lg font-semibold 
	bg-black w-full text-white rounded-lg 
	px-6 py-3 block shadow-xl hover:bg-gray-700"
                  >
                    Select
                  </button>
                </div>
              </div>
              <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
                <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                  <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                    <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                      Enteprise
                    </h1>
                    <h2 className="text-sm text-gray-500 text-center pb-6">
                      €39 /mo
                    </h2>
                    Stripe offers everything needed to run an online business at
                    scale. Get in touch for details.
                  </div>
                  <div className="flex flex-wrap mt-3 px-6">
                    <ul>
                      <li className="flex items-center">
                        <div className=" rounded-full p-2 fill-current text-green-700">
                          <svg
                            className="w-6 h-6 align-middle"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span className="text-gray-700 text-lg ml-3">
                          Electric
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className=" rounded-full p-2 fill-current text-green-700">
                          <svg
                            className="w-6 h-6 align-middle"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span className="text-gray-700 text-lg ml-3">
                          Monthly
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className=" rounded-full p-2 fill-current text-green-700">
                          <svg
                            className="w-6 h-6 align-middle"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span className="text-gray-700 text-lg ml-3">
                          No setup
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="block flex items-center p-8  uppercase">
                    <button
                      className="mt-3 text-lg font-semibold 
	bg-black w-full text-white rounded-lg 
	px-6 py-3 block shadow-xl hover:bg-gray-700"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
