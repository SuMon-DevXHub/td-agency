<script setup>
import menuIcon from "~/assets/img/icons/menu.svg";
import closeIcon from "~/assets/img/icons/close.svg";
import { storeToRefs } from "pinia";
import { useHeaderStore } from "~/stores/header";
// pinia
const { isMobileMenu, isShowModal } = storeToRefs(useHeaderStore());
const { setMobileMenu, setIsShowModal } = useHeaderStore();
const route = useRoute();

// const company = [
//   {
//     id: 1,
//     name: "About us",
//     path: "/about-us",
//     img: "/header/company/aboutUs.svg",
//   },
//   {
//     id: 2,
//     name: "Why Choose us",
//     path: "/why-choose-us",
//     img: "/header/company/whyChooseUs.svg",
//   },
//   {
//     id: 3,
//     name: "Career",
//     path: "/career",
//     img: "/header/company/career.svg",
//   },
//   {
//     id: 4,
//     name: "Blog",
//     path: "/blog",
//     img: "/header/company/blog.svg",
//   },
//   {
//     id: 5,
//     name: "Service Provider FAQs",
//     path: "/faq",
//     img: "/header/company/faq.svg",
//   },
// ];
const services = [
  {
    id: 1,
    name: "Team Enhancement Services",
    path: "/team-enhancement-services",
    img: "/header/services/teamEnhancement.png",
  },
  {
    id: 2,
    name: "Offshore Office Expansion",
    path: "/offshore-office-expansion",
    img: "/header/services/offshoreOffice.png",
  },
  {
    id: 3,
    name: "MVP Service",
    path: "/mvp-service",
    img: "/header/services/mvpService.png",
  },
  {
    id: 4,
    name: "End to End Development",
    path: "/coming-soon",
    img: "/header/services/endToEndDevelopment.png",
    nestedService: [
      {
        id: 1,
        name: "Custom Software Development",
        path: "/custom-software-development",
        img: "/header/services/customSoftwareDevelopment.png",
      },
      {
        id: 2,
        name: "Web Application Development",
        path: "/web-application-development",
        img: "/header/services/webApplicationDevelopment.png",
      },
      {
        id: 3,
        name: "Mobile App Development",
        path: "/mobile-app-development",
        img: "/header/services/mobileAppDevelopment.png",
      },
      {
        id: 4,
        name: "UI/UX Design",
        path: "/ui-ux-design",
        img: "/header/services/UiUxDesign.png",
      },
      {
        id: 5,
        name: "SQA and Testing Services",
        path: "/sqa-and-testing",
        img: "/header/services/SQATestingServices.png",
      },
      {
        id: 6,
        name: "DevOps",
        path: "/devops",
        img: "/header/services/DevOps.png",
      },
      {
        id: 7,
        name: "Digital Marketing",
        path: "/digital-marketing",
        img: "/header/services/DigitalMarketing.png",
      },
      {
        id: 8,
        name: "IT Consultancy",
        path: "/it-consultancy",
        img: "/header/services/consultancy.png",
      },
      {
        id: 9,
        name: "Software Maintenance and Support",
        path: "/software-maintenance-and-support",
        img: "/header/services/softwareMaintenanceSupport.png",
      },
    ],
  },
];

const currentSubMenu = ref(null);
const toggleSubMenu = (submenu) => {
  if (currentSubMenu.value === submenu) {
    currentSubMenu.value = null;
  } else {
    currentSubMenu.value = submenu;
  }
};

const currentNestedMenu = ref(null);
const setCurrentNestedMenu = (activeNested) => {
  if (currentNestedMenu.value !== activeNested) {
    currentNestedMenu.value = activeNested;
  } else {
    currentNestedMenu.value = null;
  }
};
</script>

<template>
  <!-- shadow-[0px_4px_4px_rgba(0,0,0,0.25)] -->
  <div class="bg-[#1A1139]" @click.stop="setMobileMenu(false)">
    <div class="container-fluid">
      <div class="flex justify-between items-center md:py-7 py-3.5 relative">
        <NuxtLink to="/">
          <BaseIconTD_Agency_logo
            class="md:w-[112px] md:h-[42px] w-[85px] h-[32px]"
          />
        </NuxtLink>
        <ul
          class="hidden lg:flex items-center ml-4 space-x-4 lgx:space-x-6 2xl:space-x-10 text-lg font-semibold text-white"
        >
          <!-- <li class="dropdown hidden">
            <p
              class="flex items-center space-x-4 cursor-pointer"
              @click="toggleSubMenu('company')"
            >
              <span>Company</span>
              <ClientOnly>
                <fa
                  :icon="['fas', 'angle-down']"
                  class="transition-all duration-300 ease-in-out"
                />
              </ClientOnly>
            </p>
            <ul
              v-if="currentSubMenu === 'company'"
              class="dropdown-content flex flex-col py-2"
            >
              <span class="box"></span>
              <span class="triangle"></span>
              <li class="mx-6" v-for="item in company" :key="item.id">
                <NuxtLink
                  class="py-3 pr-10 flex space-x-2 border-b-[0.5px] border-[#FDB21D] items-center"
                  :to="item.path"
                  :aria-label="item.name"
                  @click.native="toggleSubMenu(null)"
                  ><img :src="item.img" :alt="item.name" class="w-6 h-6" />
                  <span>{{ item.name }}</span>
                </NuxtLink>
              </li>
            </ul>
          </li> -->

          <li class="dropdown hidden">
            <p
              class="flex items-center space-x-4 cursor-pointer"
              @click="toggleSubMenu('services')"
            >
              <span>Services</span>
              <ClientOnly>
                <fa
                  :icon="['fas', 'angle-down']"
                  class="transition-all duration-300 ease-in-out"
                />
              </ClientOnly>
            </p>
            <ul
              v-if="currentSubMenu === 'services'"
              class="dropdown-content service-dropdown flex flex-col py-2"
            >
              <span class="box"></span>
              <span class="triangle service-triangle"></span>
              <div class="flex space-x-3">
                <div class="services">
                  <template v-for="item in services">
                    <li v-if="!item.nestedService" :key="item.id" class="mx-6">
                      <NuxtLink
                        class="py-3 pr-10 flex space-x-2 border-b-[0.5px] border-[#FDB21D] items-center"
                        :to="item.path"
                        @click.native="toggleSubMenu(null)"
                        ><img
                          :src="item.img"
                          :alt="item.name"
                          class="w-6 h-6"
                        />
                        <span>{{ item.name }}</span>
                      </NuxtLink>
                    </li>
                  </template>
                </div>

                <template v-for="item in services" :key="item.id">
                  <div v-if="item.nestedService" class="mx-6 nestedServices">
                    <div
                      class="py-3 pr-10 flex space-x-2 border-b-[0.5px] border-[#FDB21D] items-center mr-6"
                    >
                      <img :src="item.img" :alt="item.name" class="w-6 h-6" />
                      <span>{{ item.name }}</span>
                      <ClientOnly>
                        <fa :icon="['fas', 'hand-point-down']" class="ml-2" />
                      </ClientOnly>
                    </div>
                    <ul>
                      <template
                        v-for="nestedItem in item.nestedService"
                        :key="nestedItem.id"
                      >
                        <li class="mx-6">
                          <NuxtLink
                            class="py-3 pr-10 flex space-x-2 border-b-[0.5px] border-[#FDB21D] items-center"
                            :to="nestedItem.path"
                            @click.native="toggleSubMenu(null)"
                            ><img
                              :src="nestedItem.img"
                              :alt="nestedItem.name"
                              class="w-6 h-6"
                            />
                            <span>{{ nestedItem.name }}</span>
                          </NuxtLink>
                        </li>
                      </template>
                    </ul>
                  </div>
                </template>
              </div>
            </ul>
          </li>

          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/#our-services">Services</NuxtLink></li>
          <li><NuxtLink to="/#results">Results</NuxtLink></li>
          <li><NuxtLink to="/#portfolio">Portfolio</NuxtLink></li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCPsJ562s-4tVlQ7gH2h5-XA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DEVxHUB YouTube Channel"
              class="text-xl font-medium"
              >Reviews</a
            >
          </li>
          <li><NuxtLink to="/#about-us">About</NuxtLink></li>
          <li>
            <a
              href="tel:+8801318-116458"
              aria-label="Phone Number"
              class="flex justify-center items-center px-[20px] py-[14px] h-14 xl:h-[56px] border border-primary font-bold text-[#FFF] text-lg rounded-sm whitespace-nowrap"
            >
              <span>+880 1318 116458</span>
            </a>
          </li>
          <li @click="setIsShowModal(!isShowModal)">
            <div
              class="flex justify-center items-center w-[175px] px-[20px] py-[14px] h-14 xl:h-[56px] bg-primary font-bold text-[#1A1139] text-lg rounded-sm whitespace-nowrap cursor-pointer"
            >
              <!-- <NuxtLink
                to="/contact-us"
                aria-label="Get a quote"
                
              > -->
              <span>Get a Quote</span>
              <!-- </NuxtLink> -->
            </div>
          </li>
          <!-- <li class="hidden">
            <NuxtLink to="/appointment" aria-label="Schedule a meeting"
              >Schedule a meeting</NuxtLink
            >
          </li>
          <li class="hidden">
            <NuxtLink to="/contact-us" aria-label="Contact Us"
              >Contact Us</NuxtLink
            >
          </li> -->
        </ul>
        <div class="lg:hidden">
          <img
            @click.stop="
              isMobileMenu ? setMobileMenu(false) : setMobileMenu(true)
            "
            class="h-8 w-8 cursor-pointer"
            :src="isMobileMenu ? closeIcon : menuIcon"
            alt="DEVxHUB Menu Icon"
          />
          <div
            v-if="isMobileMenu"
            class="mobile w-full max-h-[550px] py-3 absolute top-20 md:top-28 right-0 overflow-y-auto"
            @click.stop=""
          >
            <ul
              class="flex flex-col mx-5 text-white whitespace-nowrap text-sm md:text-base font-medium text-center"
            >
              <!-- py-4 flex flex-col border-b-[0.5px] border-[#FDB21D] -->
              <li
                class="py-4 flex-col border-b-[0.5px] border-[#FDB21D] hidden"
              >
                <p
                  class="flex items-center justify-center space-x-2"
                  :class="
                    currentSubMenu === 'company'
                      ? 'text-[#FDB21D]'
                      : 'text-white'
                  "
                  @click="toggleSubMenu('company')"
                >
                  <span class="text-xl font-medium">Company</span>
                  <ClientOnly>
                    <fa
                      :icon="['fas', 'angle-down']"
                      class="transition-all duration-300 ease-in-out"
                      :class="
                        currentSubMenu === 'company' ? 'rotate-180' : 'rotate-0'
                      "
                    />
                  </ClientOnly>
                </p>
                <ul
                  v-if="currentSubMenu === 'company'"
                  class="flex flex-col pb-2 pt-4"
                >
                  <li class="py-3" v-for="item in company" :key="item.id">
                    <NuxtLink
                      :to="item.path"
                      @click.native="setMobileMenu(false)"
                      ><span>{{ item.name }}</span>
                    </NuxtLink>
                  </li>
                </ul>
              </li>

              <!-- py-4 flex flex-col border-b-[0.5px] border-[#FDB21D] -->
              <li
                class="py-4 flex-col border-b-[0.5px] border-[#FDB21D] hidden"
              >
                <p
                  class="flex items-center justify-center space-x-2"
                  :class="
                    currentSubMenu === 'services'
                      ? 'text-[#FDB21D]'
                      : 'text-white'
                  "
                  @click="toggleSubMenu('services')"
                >
                  <span class="text-xl font-medium">Services</span>
                  <ClientOnly>
                    <fa
                      :icon="['fas', 'angle-down']"
                      class="transition-all duration-300 ease-in-out"
                      :class="
                        currentSubMenu === 'services'
                          ? 'rotate-180'
                          : 'rotate-0'
                      "
                    />
                  </ClientOnly>
                </p>
                <ul
                  v-if="currentSubMenu === 'services'"
                  class="flex flex-col pb-2 pt-4"
                >
                  <template v-for="item in services">
                    <li v-if="!item.nestedService" class="py-3" :key="item.id">
                      <NuxtLink
                        :to="item.path"
                        @click.native="setMobileMenu(false)"
                        ><span>{{ item.name }}</span>
                      </NuxtLink>
                    </li>
                    <li v-if="item.nestedService" :key="item.id">
                      <div
                        :class="
                          currentNestedMenu === item.id
                            ? 'text-[#FDB21D]'
                            : 'text-white'
                        "
                        @click.native="setCurrentNestedMenu(item.id)"
                      >
                        <span>{{ item.name }}</span>
                        <ClientOnly>
                          <fa
                            :icon="['fas', 'angle-down']"
                            class="ml-2 transition-all duration-300 ease-in-out"
                            :class="
                              currentNestedMenu === item.id
                                ? 'rotate-180'
                                : 'rotate-0'
                            "
                          />
                        </ClientOnly>
                      </div>
                      <ul
                        v-if="currentNestedMenu === item.id"
                        class="flex flex-col pb-2 pt-4 transition-all duration-300 ease-in-out"
                      >
                        <template
                          v-for="nestedItem in item.nestedService"
                          :key="nestedItem.id"
                        >
                          <li class="py-3">
                            <NuxtLink
                              :to="nestedItem.path"
                              @click.native="setMobileMenu(false)"
                              ><span>{{ nestedItem.name }}</span>
                            </NuxtLink>
                          </li>
                        </template>
                      </ul>
                    </li>
                  </template>
                </ul>
              </li>

              <li class="py-4 border-b-[0.5px] border-[#FDB21D]">
                <NuxtLink
                  to="/"
                  class="text-xl font-medium"
                  @click.native="setMobileMenu(false)"
                  >Home</NuxtLink
                >
              </li>
              <li class="py-4 border-b-[0.5px] border-[#FDB21D]">
                <NuxtLink
                  to="/#our-services"
                  class="text-xl font-medium"
                  @click.native="setMobileMenu(false)"
                  >Services</NuxtLink
                >
              </li>
              <li class="py-4 border-b-[0.5px] border-[#FDB21D]">
                <NuxtLink
                  to="/#results"
                  class="text-xl font-medium"
                  @click.native="setMobileMenu(false)"
                  >Results</NuxtLink
                >
              </li>
              <li class="py-4 border-b-[0.5px] border-[#FDB21D]">
                <NuxtLink
                  to="/#portfolio"
                  class="text-xl font-medium"
                  @click.native="setMobileMenu(false)"
                  >Portfolio</NuxtLink
                >
              </li>
              <li class="py-4 border-b-[0.5px] border-[#FDB21D]">
                <a
                  href="https://www.youtube.com/channel/UCPsJ562s-4tVlQ7gH2h5-XA"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="DEVxHUB YouTube Channel"
                  class="text-xl font-medium"
                  >Reviews</a
                >
              </li>
              <li class="py-4 border-[#FDB21D]">
                <NuxtLink
                  to="/#about-us"
                  class="text-xl font-medium"
                  @click.native="setMobileMenu(false)"
                  >About</NuxtLink
                >
              </li>
              <!-- <li class="py-4 border-b-[0.5px] border-[#FDB21D] hidden">
                <NuxtLink
                  to="/appointment"
                  class="text-xl font-medium"
                  @click.native="setMobileMenu(false)"
                  aria-label="Schedule a meeting"
                  >Schedule a meeting</NuxtLink
                >
              </li>
              <li class="py-4 hidden">
                <NuxtLink
                  to="/contact-us"
                  class="text-xl font-medium"
                  aria-label="Contact Us"
                  @click.native="setMobileMenu(false)"
                  >Contact Us</NuxtLink
                >
              </li> -->
            </ul>
          </div>
        </div>
      </div>

      <!-- <BaseModal /> -->

      <div
        v-if="isShowModal"
        class="fixed z-10 overflow-y-auto top-0 w-full left-0"
      >
        <div
          class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
            >&#8203;</span
          >
          <div
            class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div class="bg-primary font-bold text-[#1A1139] flex flex-col p-5">
              <div
                class="self-end cursor-pointer"
                @click="setIsShowModal(!isShowModal)"
              >
                <ClientOnly>
                  <fa class="!h-8 w-8" :icon="['fas', 'times']" />
                </ClientOnly>
              </div>
              <div class="text-center text-2xl flex flex-col space-y-6">
                <h2>Call / Whatsapp</h2>
                <a
                  href="tel:+8801318-116458"
                  aria-label="Phone Number"
                  class="flex justify-center items-center space-x-2 px-[20px] pb-[14px] h-14 xl:h-[56px] border border-primary text-lg rounded-sm whitespace-nowrap"
                >
                  <ClientOnly>
                    <fa class="!h-6 w-6" :icon="['fas', 'phone']" />
                  </ClientOnly>
                  <span>+880 1318 116458</span>
                </a>
              </div>
            </div>
            <div class="bg-gray-200 px-4 py-3 text-right hidden">
              <button
                type="button"
                class="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                @click="setIsShowModal(!isShowModal)"
              >
                <i class="fas fa-times"></i> Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
}
.dropdown-content {
  display: none;
  position: absolute;
  top: 56px;
  z-index: 1;
  min-width: 300px;
  background: linear-gradient(145.09deg, #2a1e56 11.97%, #3d2c79 89.93%);
  box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  font-size: 18px;
  font-weight: normal;
}

.dropdown-content li {
  color: white;
  white-space: nowrap;
}
.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content li:last-child a {
  border-bottom: none;
}
.service-dropdown {
  left: 70%;
  transform: translateX(-50%);
}
.triangle {
  clip-path: polygon(50% 40%, 0% 100%, 100% 100%);
  background-color: #2a1e56;
  position: absolute;
  top: -20px;
  left: 40px;
  display: block;
  width: 20px;
  height: 20px;
}
.service-triangle {
  left: 44%;
}
.box {
  width: 100%;
  height: 30px;
  position: absolute;
  top: -30px;
  left: 0;
  opacity: 0;
}

.mobile {
  background: linear-gradient(145.09deg, #2a1e56 11.97%, #3d2c79 89.93%);
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
</style>
