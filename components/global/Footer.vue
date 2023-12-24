<script setup>
const route = useRoute();
const copyrightDate = computed(() => new Date().getFullYear());
const showModal = ref(false);
onMounted(() => {
  // setTimeout(() => {
  //   const allFooter = document.querySelectorAll(".footerSectionDiv");
  //   console.log(allFooter, "here all");
  //   const observer = new window.IntersectionObserver((entries) => {
  //     entries.forEach((singleDiv) => {
  //       if (singleDiv.isIntersecting) {
  //         singleDiv.target.classList.remove("notInViewPort");
  //         singleDiv.target.classList.add("nowInViewPort");
  //       } else if (!singleDiv.isIntersecting) {
  //         singleDiv.target.classList.add("notInViewPort");
  //         singleDiv.target.classList.remove("nowInViewPort");
  //       }
  //     });
  //   });
  //   allFooter.forEach((item) => {
  //     observer.observe(item);
  //   });
  // }, 700);
  setTimeout(() => {
    generateBalls();
  }, 700);

  window.addEventListener("resize", function (e) {
    var balls = document.querySelectorAll(".gooey-animations .ball");
    balls.forEach(function (ball) {
      ball.remove();
    });
    generateBalls();
  });
});
// methods
const generateBalls = () => {
  var gooeyAnimations = document.querySelector(".gooey-animations");
  var windowWidth = window.innerWidth;
  var ballCount = Math.floor(windowWidth / 20);
  var colors = ["#28323B", "#FFA036"];

  for (var i = 0; i < ballCount; i++) {
    var ball = document.createElement("div");
    ball.classList.add("ball");
    gooeyAnimations.appendChild(ball);
    ball.style.position = "absolute";
    ball.style.bottom = "0px";
    ball.style.left = Math.random() * (windowWidth - 100) + "px";
    ball.style.animationDelay = Math.random() * 5 + "s";
    ball.style.transform = "translateY(" + Math.random() * 10 + "px)";
    ball.style.backgroundColor = colors[i % 2];
  }
};
</script>

<template>
  <section>
    <HomeOurSolution
      class="footerSectionDiv"
      v-if="$route.name !== 'contact-us'"
    />
    <Modal :showModal="showModal" @closeModal="showModal = false" />

    <div class="relative footerSectionDiv flex flex-col justify-end h-auto">
      <!-- <img
        src="/home/backgrounds/footerBg.svg"
        class="h-full w-full hidden md:block"
        alt=""
      />
      <img
        src="/home/backgrounds/footerBgMobile.svg"
        class="h-full w-full block md:hidden"
        alt=""
      /> -->
      <footer>
        <div class="gooey-animations"></div>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="15"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -7"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <svg viewbox="0 0 1440 328" width="100vw">
          <defs>
            <clipPath
              id="wave"
              clipPathUnits="objectBoundingBox"
              transform="scale(0.00069444444, 0.00304878048)"
            >
              <path
                d="M504.452 27.7002C163.193 -42.9551 25.9595 38.071 0 87.4161V328H1440V27.7002C1270.34 57.14 845.711 98.3556 504.452 27.7002Z"
              />
            </clipPath>
          </defs>
        </svg>
      </footer>
      <div
        class="footerSection relative bottom-0 w-full pt-[30px] hidden lg:block"
      >
        <div class="mx-auto">
          <div class="relative pt-72 md:pt-56">
            <div
              class="whitespace-nowrap container-fluid flex flex-wrap gap-4 justify-between bg-[#120736] pb-4"
            >
              <div class="">
                <NuxtLink to="/">
                  <BaseIconTD_Agency_logo
                    class="md:w-[112px] md:h-[62px] w-[85px] h-[32px]"
                  />
                </NuxtLink>
                <!-- flex flex-col space-y-2.5 md:space-y-0 -->
                <div class="flex-col space-y-2.5 md:space-y-0 hidden">
                  <div
                    class="flex justify-center md:justify-start items-center md:items-baseline"
                  >
                    <nuxt-link
                      v-if="route.name !== 'about-us'"
                      class="footerInner"
                      to="/about-us/#our-mission"
                      aria-label="Our Mission"
                      >Our Mission</nuxt-link
                    >
                    <a
                      v-else
                      class="footerInner"
                      href="#our-mission"
                      rel="noopener noreferrer"
                      aria-label="Our Mission"
                      >Our Mission</a
                    >
                  </div>
                  <div
                    class="flex justify-center md:justify-start items-center md:items-baseline"
                  >
                    <nuxt-link
                      v-if="route.name !== 'index'"
                      class="footerInner"
                      to="/#trusted-companies"
                      aria-label="Trusted Companies"
                      >Trusted Companies</nuxt-link
                    >
                    <a
                      v-else
                      class="footerInner"
                      href="#trusted-companies"
                      rel="noopener noreferrer"
                      aria-label="Trusted Companies"
                      >Trusted Companies</a
                    >
                  </div>
                  <div
                    class="flex justify-center md:justify-start items-center md:items-baseline"
                  >
                    <NuxtLink
                      class="footerInner"
                      to="/contact-us"
                      aria-label="Our Location"
                      >Our Location</NuxtLink
                    >
                  </div>
                  <div
                    class="flex justify-center md:justify-start items-center md:items-baseline"
                  >
                    <nuxt-link
                      v-if="route.name !== 'index'"
                      class="footerInner"
                      to="/#technology-stacks"
                      aria-label="Technology Stacks"
                      >Technology Stacks</nuxt-link
                    >
                    <a
                      v-else
                      class="footerInner"
                      href="#technology-stacks"
                      rel="noopener noreferrer"
                      aria-label="Technology Stacks"
                      >Technology Stacks</a
                    >
                  </div>
                  <div
                    class="flex justify-center md:justify-start items-center md:items-baseline"
                  >
                    <nuxt-link
                      v-if="route.name !== 'why-choose-us'"
                      class="footerInner"
                      to="/why-choose-us#choose-us"
                      aria-label="Why choose us?"
                      >Why choose us?</nuxt-link
                    >
                    <a
                      v-else
                      class="footerInner"
                      href="#choose-us"
                      rel="noopener noreferrer"
                      aria-label="Why choose us"
                      >Why choose us</a
                    >
                  </div>
                  <!-- <div
                    class="flex justify-center md:justify-start items-center md:items-baseline"
                  >
                    <NuxtLink class="footerInner" to="/appointment"
                      >Schedule a meeting</NuxtLink
                    >
                  </div> -->
                </div>

                <div class="text-[#E2DDF0] text-xl mt-9">
                  <address class="not-italic">
                    Bir Sreshtho Shaheed<br />
                    Captain Mohiuddin Jahangir<br />
                    Smarani., Rajshahi,<br />
                    Bangladesh
                  </address>
                </div>
              </div>

              <div class="">
                <a
                  href="tel:+8801318-116458"
                  aria-label="Show me more"
                  class="flex justify-center items-center px-[20px] py-[14px] h-14 xl:h-[56px] bg-primary font-bold text-[#1A1139] text-lg rounded-sm whitespace-nowrap"
                >
                  <span>+880 1318 116458</span>
                </a>
              </div>

              <div
                class="md:justify-self-start xl:justify-self-center col-span-2"
              >
                <!-- <div
                  class="flex gap-16 xl:gap-17 2dx:gap-[120px] justify-between"
                >
                  <div
                    class="flex flex-col text-center md:text-left space-y-2.5 md:space-y-0"
                  >
                    <h2
                      class="dark:text-gray-400 text-white text-lg 2dx:text-xl lg:pb-[16px] font-bold"
                    >
                      Bangladesh Office
                    </h2>
                  </div>

                  <div
                    class="flex flex-col text-center md:text-left space-y-2.5 md:space-y-0 lg:min-w-[219px] 2dx:min-w-[242px]"
                  >
                    <h2
                      class="dark:text-gray-400 text-white text-lg 2dx:text-xl lg:pb-[16px] font-bold"
                    >
                      USA Office
                    </h2>
                  </div>
                </div> -->

                <div class="flex gap-8 xl:gap-10 2dx:gap-17 justify-between">
                  <div
                    class="flex flex-col text-center md:text-left space-y-2.5 md:space-y-4 text-xl text-white font-semibold pr-20"
                  >
                    <div><NuxtLink to="/">Home</NuxtLink></div>
                    <div><NuxtLink to="/services">Services</NuxtLink></div>
                    <div><NuxtLink to="/results">Results</NuxtLink></div>
                    <div><NuxtLink to="/portfolio">Portfolio</NuxtLink></div>
                    <div><NuxtLink to="/reviews">Reviews</NuxtLink></div>
                    <div><NuxtLink to="/about">About</NuxtLink></div>
                  </div>

                  <div
                    class="flex flex-col grow-1 min-h-[142px] top-3 min-w-[1px] bg-[#05FFF5]"
                  ></div>

                  <div
                    class="flex flex-col text-center md:text-left text-[#F0F0F0] text-xl"
                  >
                    <div>
                      <p class="text-center">
                        © 2023.
                        <span class="text-primary text-center"
                          >Trusts Dev Agency</span
                        >
                      </p>
                      <p class="text-center">All Rights Reserved.</p>
                    </div>

                    <div
                      class="flex w-full justify-between items-center space-x-2 md:space-x-1 xl:space-x-2 mt-9"
                    >
                      <a
                        href="https://www.facebook.com/devxhubcom/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="DEVxHUB Facebook Page"
                        ><img
                          class="social-icons"
                          src="/home/footer-social/facebook.png"
                          alt="DEVxHUB Facebook Icon"
                      /></a>
                      <a
                        href="https://www.linkedin.com/company/devxhubcom/"
                        rel="noopener noreferrer"
                        aria-label="DEVxHUB LinkedIn Account"
                        target="_blank"
                        ><img
                          class="social-icons"
                          src="/home/footer-social/linkedin.png"
                          alt="DEVxHUB LinkedIn Icon"
                      /></a>
                      <a
                        href="https://www.instagram.com/devxhubcom/"
                        rel="noopener noreferrer"
                        aria-label="DEVxHUB Instagram Account"
                        target="_blank"
                        ><img
                          class="social-icons"
                          src="/home/footer-social/instagram-logo.png"
                          alt="DEVxHUB Instagram Icon"
                      /></a>

                      <a
                        href="http://youtube.com/@devxhub"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="DEVxHUB YouTube Channel"
                        ><img
                          class="social-icons"
                          src="/home/footer-social/youtube.svg"
                          alt="DEVxHUB YouTube Icon"
                      /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-[#E2DDF0] text-center bg-[#120736] py-11">
              <p>
                This site is protected by reCAPTCHA and the Google
                <span class="font-semibold text-white">Privacy Policy</span> and
                <span class="font-semibold text-white">Terms of Service</span>
                apply.
              </p>
              <p>
                This website uses cookies. We use cookies to analyse website
                traffic and optimize your website experience. By using this
                website, your data will be aggregated with all other user data.
              </p>
              <p>
                <span class="font-semibold text-white"
                  >Accessibility Statement</span
                >
                and
                <span class="font-semibold text-white">Privacy Policy</span>
              </p>
            </div>

            <!-- <div
              class="flex-row container-fluid items-center hidden lg:flex bg-[#120736]"
            >
              <div class="left-0 ml-0 bottom-28 md:static py-5 lg:pt-5 lg:pb-8">
                <a href="/" rel="noopener noreferrer" aria-label="DEVxHUB_Logo"
                  ><img
                    class="w-[107px] h-[40px]"
                    src="~/assets/img/icons/DEVxHUB_Logo.webp"
                    alt="Developer Experience Hub | DEVxHUB Logo"
                /></a>
              </div>

              <div
                class="flex w-full md:my-4 mt-0 mb-4 justify-end items-center space-x-2 md:space-x-1 xl:space-x-2"
              >
                <a
                  href="https://www.facebook.com/devxhubcom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="DEVxHUB Facebook Page"
                  ><img
                    class="social-icons"
                    src="/home/footer-social/facebook.png"
                    alt="DEVxHUB Facebook Icon"
                /></a>
                <a
                  href="https://www.linkedin.com/company/devxhubcom/"
                  rel="noopener noreferrer"
                  aria-label="DEVxHUB LinkedIn Account"
                  target="_blank"
                  ><img
                    class="social-icons"
                    src="/home/footer-social/linkedin.png"
                    alt="DEVxHUB LinkedIn Icon"
                /></a>
                <a
                  href="https://www.instagram.com/devxhubcom/"
                  rel="noopener noreferrer"
                  aria-label="DEVxHUB Instagram Account"
                  target="_blank"
                  ><img
                    class="social-icons"
                    src="/home/footer-social/instagram-logo.png"
                    alt="DEVxHUB Instagram Icon"
                /></a>
                <a
                  href="https://twitter.com/devxhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="DEVxHUB Twitter/X Account"
                  ><img
                    class="social-icons"
                    src="/home/footer-social/X_logo.svg"
                    alt="DEVxHUB Twitter/X Logo"
                /></a>
                <a
                  href="https://www.pinterest.com/devxhub_com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="DEVxHUB Pinterest Account"
                  ><img
                    class="social-icons"
                    src="/home/footer-social/pinterest.png"
                    alt="DEVxHUB Pinterest Icon"
                /></a>
                <a
                  href="http://youtube.com/@devxhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="DEVxHUB YouTube Channel"
                  ><img
                    class="social-icons"
                    src="/home/footer-social/youtube.svg"
                    alt="DEVxHUB YouTube Icon"
                /></a>
              </div>
            </div> -->

            <!-- <div class="container-fluid bg-[#120736]">
              <hr class="h-0.5 py-2 md:pt-4 border-[#FDB21D]" />
              <div
                class="flex flex-col md:flex-row md:justify-between pt-3 pb-9 text-sm lg:text-lg text-white text-center font-normal"
              >
                <p class="leading-6">
                  &copy; {{ copyrightDate }}.
                  <span class="text-primary font-medium"
                    ><a
                      href="https://devxhub.com/"
                      rel="noopener noreferrer"
                      aria-label="Developer eXperience Hub"
                      >Developer eXperience Hub</a
                    ></span
                  >
                  All Rights Reserved.
                </p>
                <p class="md:mt-0 mt-4 leading-6">
                  <NuxtLink to="/privacy-policy" class="text-primary">
                    Privacy & Policy
                  </NuxtLink>
                  |
                  <NuxtLink to="/terms-of-service" class="text-primary">
                    Terms of Service
                  </NuxtLink>
                </p>
              </div>
            </div> -->
          </div>
        </div>
      </div>

      <!-- Footer for small to lg -->
      <div class="footerSection relative bottom-0 w-full pt-[30px] lg:hidden">
        <div class="mx-auto">
          <div class="relative pt-72 md:pt-56">
            <div
              class="whitespace-nowrap container-fluid flex flex-col md:flex-row gap-x-44 justify-around bg-[#120736] pb-4 gap-y-13"
            >
              <div class="flex flex-col space-y-13 md:space-y-16">
                <div class="self-center flex flex-col items-center">
                  <div class="text-center">
                    <NuxtLink to="/">
                      <BaseIconTD_Agency_logo
                        class="md:w-[112px] md:h-[62px] w-[85px] h-[32px]"
                      />
                    </NuxtLink>
                  </div>

                  <div class="text-[#E2DDF0] text-xl mt-9 text-center">
                    <address class="not-italic">
                      Bir Sreshtho Shaheed<br />
                      Captain Mohiuddin Jahangir<br />
                      Smarani., Rajshahi,<br />
                      Bangladesh
                    </address>
                  </div>
                </div>

                <div class="self-center">
                  <a
                    href="tel:+8801318-116458"
                    aria-label="Show me more"
                    class="flex justify-center items-center px-[20px] py-[14px] h-14 xl:h-[56px] bg-primary font-bold text-[#1A1139] text-lg rounded-sm whitespace-nowrap w-fit"
                  >
                    <span>+880 1318 116458</span>
                  </a>
                </div>

                <div
                  class="self-center flex flex-col text-center space-y-2.5 md:space-y-4 text-xl text-white font-semibold"
                >
                  <div><NuxtLink to="/">Home</NuxtLink></div>
                  <div><NuxtLink to="/services">Services</NuxtLink></div>
                  <div><NuxtLink to="/results">Results</NuxtLink></div>
                  <div><NuxtLink to="/portfolio">Portfolio</NuxtLink></div>
                  <div><NuxtLink to="/reviews">Reviews</NuxtLink></div>
                  <div><NuxtLink to="/about">About</NuxtLink></div>
                </div>

                <div
                  class="flex flex-col text-center md:text-left text-[#F0F0F0] text-xl"
                >
                  <div>
                    <p class="text-center">
                      © 2023.
                      <span class="text-primary text-center"
                        >Trusts Dev Agency</span
                      >
                    </p>
                    <p class="text-center">All Rights Reserved.</p>
                  </div>

                  <div
                    class="flex w-full justify-center items-center space-x-2 mt-9"
                  >
                    <a
                      href="https://www.facebook.com/devxhubcom/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="DEVxHUB Facebook Page"
                      ><img
                        class="social-icons"
                        src="/home/footer-social/facebook.png"
                        alt="DEVxHUB Facebook Icon"
                    /></a>
                    <a
                      href="https://www.linkedin.com/company/devxhubcom/"
                      rel="noopener noreferrer"
                      aria-label="DEVxHUB LinkedIn Account"
                      target="_blank"
                      ><img
                        class="social-icons"
                        src="/home/footer-social/linkedin.png"
                        alt="DEVxHUB LinkedIn Icon"
                    /></a>
                    <a
                      href="https://www.instagram.com/devxhubcom/"
                      rel="noopener noreferrer"
                      aria-label="DEVxHUB Instagram Account"
                      target="_blank"
                      ><img
                        class="social-icons"
                        src="/home/footer-social/instagram-logo.png"
                        alt="DEVxHUB Instagram Icon"
                    /></a>

                    <a
                      href="http://youtube.com/@devxhub"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="DEVxHUB YouTube Channel"
                      ><img
                        class="social-icons"
                        src="/home/footer-social/youtube.svg"
                        alt="DEVxHUB YouTube Icon"
                    /></a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer DEVxHUB logo and social link for md to before lg -->

            <div class="container-fluid bg-[#120736]">
              <hr class="h-0.5 py-2 md:pt-4 border-primary" />
              <div class="text-[#E2DDF0] text-center bg-[#120736] pb-11">
                <p>
                  This site is protected by reCAPTCHA and the Google
                  <span class="font-semibold text-white">Privacy Policy</span>
                  and
                  <span class="font-semibold text-white">Terms of Service</span>
                  apply.
                </p>
                <p>
                  This website uses cookies. We use cookies to analyse website
                  traffic and optimize your website experience. By using this
                  website, your data will be aggregated with all other user
                  data.
                </p>
                <p>
                  <span class="font-semibold text-white"
                    >Accessibility Statement</span
                  >
                  and
                  <span class="font-semibold text-white">Privacy Policy</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.twitter-icon {
  background-size: cover;
  animation: twitter 6s ease-in-out;
  animation-iteration-count: infinite;
}
// @keyframes twitter {
//   0% {
//     background-image: url("~/assets/img/icons/TwitterIcon/twitter.svg");
//   }
//   50% {
//     background-image: url("~/assets/img/icons/TwitterIcon/X_logo.svg");
//   }
//   100% {
//     background-image: url("~/assets/img/icons/TwitterIcon/twitter.svg");
//   }
// }
.nowInViewPort {
  @apply transition-all ease-in duration-1000 opacity-100;
}
.notInViewPort {
  @apply transition-all ease-in duration-300 opacity-0;
  transform: translate3d(0, 100px, 0) scale(0.6);
}
.link-style {
  @apply text-heading text-xs lg:text-lg lg:pb-[10px] font-normal leading-[22px] lg:leading-[27px] cursor-pointer hover:text-orange;
}

.address {
  @apply text-heading text-xs lg:text-lg lg:pb-[10px] font-normal leading-[22px] lg:leading-[27px];
}

.heading-style {
  @apply text-black-1 text-sm lg:text-[25px] font-bold pb-[16px] lg:pb-[30px];
}
.footerInner {
  @apply text-white text-base 2dx:text-lg lg:pb-[10px] leading-[22px] lg:leading-[27px] cursor-pointer hover:text-orange dark:text-gray-400;
}
.footerSection {
  /* background: #120736; */
  /* background: url(/home/backgrounds/footerUpperSvg.svg) no-repeat top;
  background-size: 100%; */
}
svg {
  width: 100%;
}

footer {
  left: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 400px;
  top: 0;
  filter: url(#goo);
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 225px;
    clip-path: url("#wave");
    background-color: #0d0736;

    @media only screen and (max-width: 700px) {
      height: 150px;
    }
  }
}

.social-icons {
  @apply w-8 lgdx:w-10 aspect-square object-contain;
}

@media (min-width: 1024px) and (max-width: 1200px) {
  .social-icons {
    @apply w-7;
  }
}
</style>
