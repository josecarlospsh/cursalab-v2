<template>
  <div class="header bg-white">
    <div class="flex flex-row pl-4 pr-0 md:pl-12 items-center justify-between">
      <div class="logo md:mr-auto">
        <router-link :to="{ name: 'anuncios' }" class="brand mr-auto">
          <img
            src="https://cursalab.pe/wp-content/uploads/2018/11/logo.png"
            alt="Cursalab"
            width="150"
            class="bg-primary"
          />
        </router-link>
      </div>
      <nav class="flex items-center content-center">
        <router-link
          :to="{ name: 'anuncios' }"
          class="border-b-4 border-secondary text-secondary mx-8 py-4 hidden lg:block"
        >Anuncios</router-link>
        <router-link
          :to="{ name: 'cursos' }"
          class="border-b-4 border-white text-primary mx-8 py-4 hidden lg:block"
        >Cursos</router-link>
        <router-link
          :to="{ name: 'progreso' }"
          class="border-b-4 border-white text-primary mx-8 py-4 hidden lg:block"
        >Progreso</router-link>
        <div class="flex items-center py-3 px-6 md:px-12 w-full opsidemenu">
          <img
            class="w-10 h-10 rounded-full mr-0 md:mr-4"
            src="https://scontent.flim8-1.fna.fbcdn.net/v/t31.0-1/c0.0.160.160a/p160x160/1957720_10202680309021840_1243974886_o.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_eui2=AeE-eoKP7fAqWJVc3w-N4eT32iZcuvlB2QraJly6-UHZCj10zmI1T5CFplXSDYPcv6Q&_nc_ohc=qYSNIQIkUmoAX_egmhj&_nc_ht=scontent.flim8-1.fna&oh=126d319215a8cd1e881141028e9a6e4f&oe=5F59033E"
            alt="JC"
          />
          <span class="hidden md:inline-block">Jose Carlos Pajuelo</span>
          <button @click.prevent="toggleSidemenu" class="ml-5">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="plus w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
          <div class="sidemenu" :class="{ 'active' : isSidemenuActive }">
            <!-- <vue-scroll :ops="ops"> -->
            <div>
              <a
                href="#"
                class="sidemenu-items flex-col md:flex-row items-center text-white hover:text-secondary py-4 px-4 md:px-12"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="academic-cap w-6 h-6 mx-5"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <span class="text-sm md:text-lg">Diplomas</span>
              </a>
              <a
                href="#"
                class="sidemenu-items flex-col md:flex-row items-center text-white hover:text-secondary py-4 px-4 md:px-12"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="chart-bar w-6 h-6 mx-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span class="text-sm md:text-lg">Ranking</span>
              </a>
              <a
                href
                class="sidemenu-items flex-col md:flex-row items-center text-white hover:text-secondary py-4 px-4 md:px-12"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="badge-check w-6 h-6 mx-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <span class="text-sm md:text-lg">Medallas</span>
              </a>
              <a
                href
                class="sidemenu-items flex-col md:flex-row items-center text-white hover:text-secondary py-4 px-4 md:px-12"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="clipboard-list w-6 h-6 mx-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
                <span class="text-sm md:text-lg">Encuestas</span>
              </a>
              <div class="sepmenu"></div>
              <router-link
                :to="{ name: 'ayuda' }"
                class="sidemenu-items flex-col md:flex-row items-center text-white hover:text-secondary py-4 px-4 md:px-12"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="question-mark-circle w-6 h-6 mx-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="text-sm md:text-lg">Ayuda</span>
              </router-link>
              <router-link
                :to="{ name: 'faq' }"
                class="sidemenu-items flex-col md:flex-row items-center text-white hover:text-secondary py-4 px-4 md:px-12"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="chat-alt2 w-6 h-6 mx-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                <span class="text-sm md:text-lg">Preguntas frec.</span>
              </router-link>
              <a
                href
                class="sidemenu-items flex-col md:flex-row items-center text-white hover:text-secondary py-4 px-4 md:px-12"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="folder w-6 h-6 mx-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                <span class="text-sm md:text-lg">Archivo</span>
              </a>
              <router-link
                :to="{ name: 'login' }"
                class="sidemenu-items flex-col md:flex-row items-center bg-gray-800 bg-opacity-25 text-white hover:text-secondary py-4 px-4 md:px-12"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="logout w-6 h-6 mx-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span class="text-sm md:text-lg">Cerrar Sesion</span>
              </router-link>
            </div>
            <!-- </vue-scroll> -->
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidemenuActive: false,
      ops: {
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: true,
          scrollingY: true,
          speed: 200,
          easing: undefined,
          verticalNativeBarPos: "right",
          contentHeight: 700,
          maxHeight: 700,
        },
        bar: {
          background: "#eeeeee",
          opacity: 0.5,
          size: "5px",
          // keepShow: true,
        },
      },
    };
  },
  methods: {
    toggleSidemenu() {
      this.isSidemenuActive = !this.isSidemenuActive;
    },
  },
};
</script>

<style lang="scss" scoped>
$color-white: #ffffff;
$color-primary: #5458ea;
$color-secondary: #29ace6;
.header {
  //   background-color: #ccc;
  @apply fixed w-full shadow-md;
  z-index: 9999;
}
.sepmenu {
  margin-top: 7rem;
}
.opsidemenu {
  position: relative;
  background-color: $color-primary;
  color: $color-white;
}
.sidemenu {
  background-color: $color-primary;
  position: absolute;
  height: 100vh;
  width: 0;
  top: 100%;
  right: 0;
  overflow-y: auto;
  z-index: 9;
  @media screen and(min-width: 768px) {
    width: 40%;
  }
  &.active {
    border-top: 2px solid $color-secondary;
    width: 100%;
    .sidemenu-items {
      justify-content: start;
      a[title]:hover:after {
        content: attr(title);
        position: absolute;
      }
      svg {
        margin: 0 1rem;
        // height: auto;
        //   display: inline-flex;
      }
      span {
        display: inline-block;
      }
    }
  }
  .sidemenu-items {
    margin-top: 1rem;
    justify-content: center;
    align-content: center;
    display: flex;
    &:first-child {
      margin-top: 2.5rem;
    }
    svg {
      width: 1.3rem;
      height: 1.3rem;
      margin: 0;
      // height: auto;
      //   display: inline-flex;
    }
    span {
      display: none;
    }
  }
}
</style>
