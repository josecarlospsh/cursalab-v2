<template>
  <div class="header">
    <div class="flex flex-row pl-4 pr-0 md:pl-10 items-center justify-between h-full">
      <div class="logo md:mr-auto">
        <router-link :to="{ name: 'inicio' }" class="brand mr-auto">
          <img src="../../assets/logo.svg" alt="Cursalab" width="150" class />
        </router-link>
      </div>
      <nav class="navmenu">
        <router-link :to="{ name: 'anuncios' }" class="nav-item">Anuncios</router-link>
        <router-link :to="{ name: 'cursos' }" class="nav-item">Cursos</router-link>
        <router-link :to="{ name: 'progreso' }" class="nav-item">Progreso</router-link>
        <div class="opsidemenu">
          <div class="user flex items-center">
            <img
              class="w-10 h-10 rounded-full mr-0 md:mr-4"
              src="https://scontent.flim8-1.fna.fbcdn.net/v/t31.0-1/c0.0.160.160a/p160x160/1957720_10202680309021840_1243974886_o.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_eui2=AeE-eoKP7fAqWJVc3w-N4eT32iZcuvlB2QraJly6-UHZCj10zmI1T5CFplXSDYPcv6Q&_nc_ohc=qYSNIQIkUmoAX_egmhj&_nc_ht=scontent.flim8-1.fna&oh=126d319215a8cd1e881141028e9a6e4f&oe=5F59033E"
              alt="JC"
            />
            <span class="hidden md:text-overflow-1">Jose Carlos Pajuelo</span>
          </div>
          <button @click.prevent="toggleSidemenu" class="bnsidemenu ml-5">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="plus w-6 h-6"
              v-if="!isSidemenuActive"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <svg v-if="isSidemenuActive" viewBox="0 0 20 20" fill="currentColor" class="x w-6 h-6">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div class="sidemenu" :class="{ 'active' : isSidemenuActive }">
            <div>
              <router-link :to="{ name: 'diplomas' }" class="sidemenu-item" data-title="Diplomas">
                <svg
                  fill="none"
                  class="academic-cap fill-current w-6 h-6 mx-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 21.31 21.48"
                >
                  <path
                    class="cls-1"
                    d="M981,529.26H960.36a.36.36,0,0,0-.36.36v14.2a.36.36,0,0,0,.36.35h6.42l-2.95,3a.36.36,0,0,0,0,.5.32.32,0,0,0,.25.1h2.66v2.66a.35.35,0,0,0,.6.26l3.27-3.27h.07l3.26,3.27a.37.37,0,0,0,.5,0,.36.36,0,0,0,.11-.26v-2.66h2.66a.35.35,0,0,0,.35-.35.33.33,0,0,0-.1-.25l-3-3H981a.36.36,0,0,0,.36-.35v-14.2A.36.36,0,0,0,981,529.26Zm-13.49,20.27v-2.16a.36.36,0,0,0-.36-.36h-2.16l2.28-2.27v.07a.14.14,0,0,1,0,.06,3.62,3.62,0,0,0,.13.35,1.34,1.34,0,0,0,.06.12,1.3,1.3,0,0,0,.14.26,1.76,1.76,0,0,0,.14.23l.18.24,0,0,.2.22.2.18a.18.18,0,0,0,.07,0,1.66,1.66,0,0,0,.21.16l.24.16.26.14.12.05a2.37,2.37,0,0,0,.34.13l.16,0Zm3.92-3,0,0-.25,0-.28,0h-.31l-.28,0-.24,0-.06,0-.12,0-.28-.11-.08,0-.22-.11-.19-.13-.18-.14,0,0-.18-.16-.16-.17a.05.05,0,0,0,0,0l-.15-.2a1.08,1.08,0,0,1-.11-.18,1.05,1.05,0,0,1-.12-.21l0-.09c0-.09-.07-.19-.1-.28a.61.61,0,0,1,0-.11l0,0a2,2,0,0,0,0-.24l0-.28v-.16a2.84,2.84,0,0,1,5.68,0V544l0,.28a1.44,1.44,0,0,1-.05.24v.06s0,.07,0,.12a2.31,2.31,0,0,1-.1.28l0,.08a1.51,1.51,0,0,1-.11.22,2.14,2.14,0,0,1-.13.19l-.13.18,0,0a1.29,1.29,0,0,1-.16.17l-.17.17,0,0-.2.15-.17.11-.22.12-.1,0-.28.1Zm5,.45H974.2a.36.36,0,0,0-.35.36v2.16l-2.28-2.28h.07l.07,0,.34-.13.13-.05.27-.15.22-.14.23-.17,0,0a2.09,2.09,0,0,0,.22-.2,1.54,1.54,0,0,0,.18-.2l.06-.06a1.77,1.77,0,0,0,.16-.22,1.43,1.43,0,0,0,.16-.24l.14-.26,0-.12a3.42,3.42,0,0,0,.13-.34.83.83,0,0,0,0-.15Zm4.23-3.55h-6.4s0-.06,0-.09a2.17,2.17,0,0,0,0-.25l0-.13a1.17,1.17,0,0,0-.05-.2.78.78,0,0,0,0-.14l-.06-.18-.07-.14a1.19,1.19,0,0,0-.08-.16s0-.09-.07-.13l-.09-.16-.09-.12-.11-.15-.1-.12-.12-.13-.11-.11-.13-.11-.12-.1-.14-.11-.13-.09-.15-.09-.13-.08-.17-.07-.14-.07-.17-.06-.14-.05-.2,0-.13,0-.23,0-.11,0h-.71l-.12,0-.22,0-.14,0-.19,0-.14.05-.18.06-.13.07-.17.07-.13.08-.16.09-.12.09-.15.11a.52.52,0,0,0-.11.1l-.14.11-.11.11-.11.13-.1.12s-.07.1-.11.15l-.09.12-.09.16-.08.13c0,.05,0,.11-.08.16l-.06.14a1.34,1.34,0,0,1-.07.18c0,.05,0,.09,0,.14l-.06.2,0,.13c0,.08,0,.17,0,.25s0,.06,0,.09h-6.41V530h19.88Z"
                    transform="translate(-960 -529.26)"
                  />
                  <polygon class="cls-1" points="10.65 12.43 10.65 12.43 10.65 12.43 10.65 12.43" />
                  <path
                    class="cls-1"
                    d="M970.65,541.69a2.13,2.13,0,0,0-2.13,2.14v.09a2,2,0,0,1,0,.23.37.37,0,0,0,.36.3H969a.36.36,0,0,0,.3-.4.88.88,0,0,1,0-.17v-.06a1.42,1.42,0,0,1,1.42-1.42.36.36,0,1,0,0-.71Z"
                    transform="translate(-960 -529.26)"
                  />
                  <path
                    class="cls-1"
                    d="M964.26,533.52H977a.36.36,0,1,0,0-.71H964.26a.36.36,0,0,0,0,.71Z"
                    transform="translate(-960 -529.26)"
                  />
                  <path
                    class="cls-1"
                    d="M964.26,535.65H977a.36.36,0,1,0,0-.71H964.26a.36.36,0,0,0,0,.71Z"
                    transform="translate(-960 -529.26)"
                  />
                  <path
                    class="cls-1"
                    d="M964.26,537.78H977a.36.36,0,1,0,0-.71H964.26a.36.36,0,0,0,0,.71Z"
                    transform="translate(-960 -529.26)"
                  />
                </svg>
                <span class="text-sm md:text-lg">Diplomas</span>
              </router-link>
              <router-link :to="{ name: 'ranking' }" class="sidemenu-item" data-title="Ranking">
                <svg
                  fill="none"
                  class="chart-bar fill-current w-6 h-6 mx-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 21.13 27"
                >
                  <path
                    class="cls-1"
                    d="M970.08,542.87h-6.36V532.26a.43.43,0,0,0-.44-.44h-6.59a.44.44,0,0,0-.44.44v5.13h-6.33a.47.47,0,0,0-.48.48V553a.47.47,0,0,0,.48.48h20.16a.47.47,0,0,0,.48-.48v-9.67A.48.48,0,0,0,970.08,542.87Zm-13.83,10h-6.16V538.05h6.16Zm6.81,0h-6.15V532.48h6.15Zm6.85,0h-6.19v-9.31h6.19Z"
                    transform="translate(-949.44 -526.5)"
                  />
                  <path
                    class="cls-1"
                    d="M951.78,534.85l-.18,1.08a.44.44,0,0,0,.63.46l1-.51,1,.51a.45.45,0,0,0,.47,0,.42.42,0,0,0,.17-.42l-.18-1.08.78-.76a.44.44,0,0,0,.11-.45.45.45,0,0,0-.35-.3l-1.09-.15-.48-1a.46.46,0,0,0-.4-.25.44.44,0,0,0-.39.25l-.49,1-1.08.15a.46.46,0,0,0-.36.3.45.45,0,0,0,.12.45Zm.75-1a.42.42,0,0,0,.33-.24l.34-.68.34.68a.45.45,0,0,0,.33.24l.76.11-.55.53a.43.43,0,0,0-.12.39l.13.75-.68-.36a.49.49,0,0,0-.41,0l-.68.36.13-.75a.44.44,0,0,0-.13-.39l-.54-.53Z"
                    transform="translate(-949.44 -526.5)"
                  />
                  <path
                    class="cls-1"
                    d="M958.58,529.39l-.19,1.07a.44.44,0,0,0,.64.46l1-.5,1,.5a.44.44,0,0,0,.64-.46l-.19-1.07.79-.76a.44.44,0,0,0,.11-.45.43.43,0,0,0-.36-.3l-1.08-.16-.49-1a.44.44,0,0,0-.78,0l-.49,1-1.08.16a.43.43,0,0,0-.36.3.44.44,0,0,0,.11.45Zm.75-1a.43.43,0,0,0,.33-.24l.34-.69.34.69a.43.43,0,0,0,.33.24l.76.11-.55.53a.46.46,0,0,0-.13.39l.13.75-.68-.36a.41.41,0,0,0-.4,0l-.68.36.13-.75a.46.46,0,0,0-.13-.39l-.55-.53Z"
                    transform="translate(-949.44 -526.5)"
                  />
                  <path
                    class="cls-1"
                    d="M965.7,540.53l-.18,1.07a.43.43,0,0,0,.17.43.45.45,0,0,0,.46,0l1-.51,1,.51a.45.45,0,0,0,.46,0,.43.43,0,0,0,.17-.43l-.18-1.07.78-.76a.42.42,0,0,0,.11-.45.43.43,0,0,0-.35-.3l-1.09-.16-.48-1a.46.46,0,0,0-.4-.25.44.44,0,0,0-.39.25l-.48,1-1.09.16a.43.43,0,0,0-.35.3.42.42,0,0,0,.11.45Zm.75-1a.42.42,0,0,0,.33-.24l.34-.68.34.68a.45.45,0,0,0,.33.24l.76.11-.55.53a.43.43,0,0,0-.12.39l.13.75-.68-.36a.49.49,0,0,0-.41,0l-.68.36.13-.75a.44.44,0,0,0-.13-.39l-.54-.53Z"
                    transform="translate(-949.44 -526.5)"
                  />
                </svg>
                <span class="text-sm md:text-lg">Ranking</span>
              </router-link>
              <router-link :to="{ name: 'medallas' }" class="sidemenu-item" data-title="Medallas">
                <svg
                  fill="none"
                  class="badge-check fill-current w-6 h-6 mx-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 19.55"
                >
                  <path
                    class="cls-1"
                    d="M960,533.23a6.77,6.77,0,1,0,6.77,6.77A6.78,6.78,0,0,0,960,533.23ZM960,546a6,6,0,1,1,6-6A6,6,0,0,1,960,546Z"
                    transform="translate(-950 -530.23)"
                  />
                  <path
                    class="cls-1"
                    d="M969.47,541.34a2,2,0,0,0,0-2.68,2.57,2.57,0,0,1-.38-.73,2.8,2.8,0,0,1,0-.86,2.39,2.39,0,0,0-.1-1.4,2.51,2.51,0,0,0-1-1,2.65,2.65,0,0,1-.67-.5,2.62,2.62,0,0,1-.35-.77,1.91,1.91,0,0,0-2.06-1.65,2.39,2.39,0,0,1-.83-.17,2.68,2.68,0,0,1-.64-.53,2.51,2.51,0,0,0-1.19-.82,2.46,2.46,0,0,0-1.38.22,1.78,1.78,0,0,1-1.68,0,2.46,2.46,0,0,0-1.38-.22,2.51,2.51,0,0,0-1.19.82,2.68,2.68,0,0,1-.64.53,2.39,2.39,0,0,1-.83.17,1.91,1.91,0,0,0-2.06,1.65,2.62,2.62,0,0,1-.35.77,2.65,2.65,0,0,1-.67.5,2.51,2.51,0,0,0-1,1,2.39,2.39,0,0,0-.1,1.4,2.8,2.8,0,0,1,0,.86,2.57,2.57,0,0,1-.38.73,2,2,0,0,0,0,2.68,2.57,2.57,0,0,1,.38.73,2.8,2.8,0,0,1,0,.86,2.39,2.39,0,0,0,.1,1.4,2.51,2.51,0,0,0,1,1,2.65,2.65,0,0,1,.67.5,2.62,2.62,0,0,1,.35.77,1.91,1.91,0,0,0,2.06,1.65,2.39,2.39,0,0,1,.83.17,2.68,2.68,0,0,1,.64.53,2.51,2.51,0,0,0,1.19.82,2.46,2.46,0,0,0,1.38-.22,1.79,1.79,0,0,1,1.68,0,3.34,3.34,0,0,0,1.07.25,1.63,1.63,0,0,0,.31,0,2.51,2.51,0,0,0,1.19-.82,2.68,2.68,0,0,1,.64-.53,2.39,2.39,0,0,1,.83-.17,1.91,1.91,0,0,0,2.06-1.65,2.62,2.62,0,0,1,.35-.77,2.65,2.65,0,0,1,.67-.5,2.51,2.51,0,0,0,1-1,2.39,2.39,0,0,0,.1-1.4,2.8,2.8,0,0,1,0-.86A2.57,2.57,0,0,1,969.47,541.34Zm-.66-.42a3.08,3.08,0,0,0-.48,1,3.24,3.24,0,0,0,0,1.12,1.94,1.94,0,0,1,0,1,1.91,1.91,0,0,1-.76.64,3.27,3.27,0,0,0-.87.69,3.08,3.08,0,0,0-.48,1,2,2,0,0,1-.45.88,1.92,1.92,0,0,1-1,.24,3.38,3.38,0,0,0-1.09.24,3.43,3.43,0,0,0-.86.7,2.1,2.1,0,0,1-.8.6,2.05,2.05,0,0,1-.95-.2,2.54,2.54,0,0,0-2.2,0,2.05,2.05,0,0,1-.95.2,2.1,2.1,0,0,1-.8-.6,3.43,3.43,0,0,0-.86-.7,3.38,3.38,0,0,0-1.09-.24,1.92,1.92,0,0,1-1-.24,2,2,0,0,1-.45-.88,3.08,3.08,0,0,0-.48-1,3.44,3.44,0,0,0-.87-.69,1.91,1.91,0,0,1-.76-.64,1.94,1.94,0,0,1,0-1,3.24,3.24,0,0,0,0-1.12,3.08,3.08,0,0,0-.48-1,1.24,1.24,0,0,1,0-1.84,3.08,3.08,0,0,0,.48-1,3.24,3.24,0,0,0,0-1.12,1.94,1.94,0,0,1,0-1,1.91,1.91,0,0,1,.76-.64,3.27,3.27,0,0,0,.87-.69,3.08,3.08,0,0,0,.48-1,2,2,0,0,1,.45-.88,1.92,1.92,0,0,1,1-.24,3.38,3.38,0,0,0,1.09-.24,3.43,3.43,0,0,0,.86-.7,2.1,2.1,0,0,1,.8-.6,2.16,2.16,0,0,1,.95.19,2.46,2.46,0,0,0,2.2,0,2.16,2.16,0,0,1,.95-.19,2.1,2.1,0,0,1,.8.6,3.43,3.43,0,0,0,.86.7,3.38,3.38,0,0,0,1.09.24,1.92,1.92,0,0,1,1,.24,2,2,0,0,1,.45.88,3.08,3.08,0,0,0,.48,1,3.44,3.44,0,0,0,.87.69,1.91,1.91,0,0,1,.76.64,1.94,1.94,0,0,1,0,1,3.24,3.24,0,0,0,0,1.12,3.08,3.08,0,0,0,.48,1,1.24,1.24,0,0,1,0,1.84Z"
                    transform="translate(-950 -530.23)"
                  />
                  <path
                    class="cls-1"
                    d="M963.72,538.81l-2.14-.63-1.26-1.84a.39.39,0,0,0-.64,0l-1.26,1.84-2.14.63a.4.4,0,0,0-.26.26.39.39,0,0,0,.06.36l1.36,1.77-.06,2.23a.35.35,0,0,0,.16.32.36.36,0,0,0,.36,0l2.1-.74,2.1.74a.31.31,0,0,0,.13,0,.4.4,0,0,0,.23-.08.35.35,0,0,0,.16-.32l-.06-2.23,1.36-1.77a.39.39,0,0,0,.06-.36A.4.4,0,0,0,963.72,538.81Zm-1.86,2a.33.33,0,0,0-.08.25l.05,1.8-1.7-.61-.13,0-.13,0-1.7.61.05-1.8a.33.33,0,0,0-.08-.25L957,539.4l1.73-.51a.36.36,0,0,0,.21-.15l1-1.49,1,1.49a.36.36,0,0,0,.21.15l1.73.51Z"
                    transform="translate(-950 -530.23)"
                  />
                </svg>
                <span class="text-sm md:text-lg">Medallas</span>
              </router-link>
              <router-link :to="{ name: 'encuestas' }" class="sidemenu-item" data-title="Encuestas">
                <svg
                  fill="none"
                  class="clipboard-list fill-current w-6 h-6 mx-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16.44 21.04"
                >
                  <path
                    class="cls-1"
                    d="M955.36,538.48l1.93-2.31a.33.33,0,0,0,0-.44.31.31,0,0,0-.44,0l-1.65,2-.36-.58a.31.31,0,1,0-.52.32l.58,1A.31.31,0,0,0,955.36,538.48Z"
                    transform="translate(-951.78 -529.48)"
                  />
                  <path
                    class="cls-1"
                    d="M954.28,541.56l.58,1a.31.31,0,0,0,.5,0l1.93-2.31a.32.32,0,0,0,0-.44.31.31,0,0,0-.44,0l-1.65,2-.36-.58a.31.31,0,1,0-.52.32Z"
                    transform="translate(-951.78 -529.48)"
                  />
                  <path
                    class="cls-1"
                    d="M954.28,545.66l.58,1a.3.3,0,0,0,.5,0l1.93-2.31a.31.31,0,0,0-.48-.39l-1.65,2-.36-.59a.31.31,0,1,0-.52.33Z"
                    transform="translate(-951.78 -529.48)"
                  />
                  <path
                    class="cls-1"
                    d="M967.91,546.88a.31.31,0,0,0-.31.31v2.24a.48.48,0,0,1-.47.48H952.87a.48.48,0,0,1-.47-.48V535.92a.31.31,0,1,0-.62,0v13.51a1.09,1.09,0,0,0,1.09,1.09h14.26a1.09,1.09,0,0,0,1.09-1.09v-2.24A.31.31,0,0,0,967.91,546.88Z"
                    transform="translate(-951.78 -529.48)"
                  />
                  <path
                    class="cls-1"
                    d="M967.13,531.85h-1.51v-1.27a1.1,1.1,0,1,0-2.2,0v1.27H961.1v-1.27a1.1,1.1,0,1,0-2.2,0v1.27h-2.32v-1.27a1.1,1.1,0,1,0-2.2,0v1.27h-1.51a1.09,1.09,0,0,0-1.09,1.09v1.54a.31.31,0,0,0,.62,0v-1.54a.47.47,0,0,1,.47-.47h1.51V533a1.1,1.1,0,1,0,2.2,0v-.49h2.32V533a1.1,1.1,0,1,0,2.2,0v-.49h2.32V533a1.1,1.1,0,1,0,2.2,0v-.49h1.51a.47.47,0,0,1,.47.47v12.81a.31.31,0,0,0,.62,0V532.94A1.09,1.09,0,0,0,967.13,531.85ZM956,533a.47.47,0,0,1-.48.48A.48.48,0,0,1,955,533v-2.38a.49.49,0,0,1,.49-.49.48.48,0,0,1,.48.49Zm4.53,0a.49.49,0,0,1-1,0v-2.38a.49.49,0,1,1,1,0Zm4.52,0a.48.48,0,0,1-.49.48A.47.47,0,0,1,964,533v-2.38a.48.48,0,0,1,.48-.49.49.49,0,0,1,.49.49Z"
                    transform="translate(-951.78 -529.48)"
                  />
                  <path
                    class="cls-1"
                    d="M958.59,538.73h6.5a1,1,0,0,0,0-1.93h-6.5a1,1,0,0,0,0,1.93Zm0-1.31h6.5a.35.35,0,0,1,.35.35.35.35,0,0,1-.35.35h-6.5a.35.35,0,0,1-.35-.35A.35.35,0,0,1,958.59,537.42Z"
                    transform="translate(-951.78 -529.48)"
                  />
                  <path
                    class="cls-1"
                    d="M958.59,542.81h6.5a1,1,0,0,0,0-1.93h-6.5a1,1,0,0,0,0,1.93Zm0-1.31h6.5a.35.35,0,1,1,0,.69h-6.5a.35.35,0,1,1,0-.69Z"
                    transform="translate(-951.78 -529.48)"
                  />
                  <path
                    class="cls-1"
                    d="M958.59,546.89h6.5a1,1,0,0,0,0-1.93h-6.5a1,1,0,0,0,0,1.93Zm0-1.32h6.5a.35.35,0,0,1,.35.35.35.35,0,0,1-.35.35h-6.5a.35.35,0,0,1-.35-.35A.35.35,0,0,1,958.59,545.57Z"
                    transform="translate(-951.78 -529.48)"
                  />
                </svg>
                <span class="text-sm md:text-lg">Encuestas</span>
              </router-link>
              <div class="sepmenu"></div>
              <router-link :to="{ name: 'ayuda' }" class="sidemenu-item" data-title="Ayuda">
                <svg
                  fill="none"
                  class="question-mark-circle fill-current w-6 h-6 mx-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25.2 25.2"
                >
                  <path
                    class="cls-1"
                    d="M960,527.4A12.6,12.6,0,1,0,972.6,540,12.61,12.61,0,0,0,960,527.4Zm0,23.1A10.5,10.5,0,1,1,970.5,540,10.51,10.51,0,0,1,960,550.5Z"
                    transform="translate(-947.4 -527.4)"
                  />
                  <path class="cls-1" d="M959.86,546.88h0Z" transform="translate(-947.4 -527.4)" />
                  <path
                    class="cls-1"
                    d="M960.06,533.12a5.27,5.27,0,0,0-3.94,1.61.82.82,0,0,0-.18.52.89.89,0,0,0,.84.87.9.9,0,0,0,.59-.22,3.39,3.39,0,0,1,2.49-1c1.42,0,2.1.76,2.1,1.66,0,1.94-3.44,2.18-3.44,4.69,0,.61.38,1.73,1.17,1.73h0a.77.77,0,0,0,.77-.77c0-.28-.2-.52-.2-.8,0-1.89,3.69-2.16,3.78-5.09C964.06,534.49,962.55,533.12,960.06,533.12Z"
                    transform="translate(-947.4 -527.4)"
                  />
                  <path
                    class="cls-1"
                    d="M959.82,544.36a1.26,1.26,0,0,0-1.25,1.25v.06a1.24,1.24,0,0,0,1.26,1.2,1.26,1.26,0,0,0,1.24-1.26A1.28,1.28,0,0,0,959.82,544.36Z"
                    transform="translate(-947.4 -527.4)"
                  />
                </svg>
                <span class="text-sm md:text-lg">Ayuda</span>
              </router-link>
              <router-link :to="{ name: 'faq' }" class="sidemenu-item" data-title="Preguntas frec.">
                <svg
                  fill="none"
                  class="chat-alt2 fill-current w-6 h-6 mx-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22.88 22.89"
                >
                  <path
                    class="cls-1"
                    d="M971.44,542.54c0-3.9-3.5-7.08-7.81-7.08-.3,0-.6,0-.91,0v-5.32a1.63,1.63,0,0,0-1.63-1.63h-10.9a1.63,1.63,0,0,0-1.63,1.63v11.63a.55.55,0,0,0,.9.41l2-1.69h4.7a6.49,6.49,0,0,0-.32,2c0,3.7,3.15,6.78,7.19,7.06l2.49,1.74a.55.55,0,0,0,.85-.55l-.31-1.51a8,8,0,0,0,3.71-2.33A6.6,6.6,0,0,0,971.44,542.54Zm-20.2-3.09a.59.59,0,0,0-.36.13l-1.23,1.06V530.19a.54.54,0,0,1,.54-.54h10.9a.54.54,0,0,1,.54.54v5.5a8,8,0,0,0-3.11,1.51l-2.37-5.76a.55.55,0,0,0-.51-.34.53.53,0,0,0-.5.34l-2.55,6.17a.61.61,0,0,0,0,.42.62.62,0,0,0,.3.3.56.56,0,0,0,.42,0,.52.52,0,0,0,.29-.29l.61-1.48h2.86l.59,1.43a7.62,7.62,0,0,0-1.06,1.47Zm5.38-4h-2l1-2.38Zm8.67,12.89a.54.54,0,0,0-.41.64l.13.68-1.5-1a.56.56,0,0,0-.28-.1c-3.54-.18-6.32-2.81-6.32-6s3-6,6.72-6,6.72,2.69,6.72,6A6.15,6.15,0,0,1,965.29,548.35Z"
                    transform="translate(-948.56 -528.56)"
                  />
                  <path
                    class="cls-1"
                    d="M966.13,544.79a4.47,4.47,0,0,0,.59-2.25,4.33,4.33,0,0,0-.86-2.64,2.71,2.71,0,0,0-4.46,0,4.5,4.5,0,0,0,0,5.29,2.84,2.84,0,0,0,2.23,1.17,2.72,2.72,0,0,0,1.82-.73l.75.61a.53.53,0,0,0,.76-.09.54.54,0,0,0-.08-.76Zm-.86-.69-.21-.17a.53.53,0,0,0-.76.09.54.54,0,0,0,.08.76l.2.16a1.63,1.63,0,0,1-1,.33c-1.1,0-2-1.23-2-2.73s.9-2.72,2-2.72,2,1.22,2,2.72A3.5,3.5,0,0,1,965.27,544.1Z"
                    transform="translate(-948.56 -528.56)"
                  />
                </svg>
                <span class="text-sm md:text-lg">Preguntas frec.</span>
              </router-link>
              <router-link :to="{ name: 'archivo' }" class="sidemenu-item" data-title="Archivo">
                <svg
                  fill="none"
                  class="folder fill-current w-6 h-6 mx-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20.42 19.43"
                >
                  <path
                    class="cls-1"
                    d="M969.22,536.54H965.6V533.9a.28.28,0,0,0-.09-.22l-3.29-3.3,0,0-.06,0h0l-.08,0h-7.27a.32.32,0,0,0-.33.32v4h-3.62a1,1,0,0,0-1,1v13.18a1,1,0,0,0,1,1h18.44a1,1,0,0,0,1-1v-11.2A1,1,0,0,0,969.22,536.54Zm-6.91-5.13,2.15,2.17h-2.15Zm-7.25-.47h6.59v3a.33.33,0,0,0,.33.33h3v2.3h-4.47l-1.88-1.88a.36.36,0,0,0-.24-.09h-3.29Zm14.49,17.79a.33.33,0,0,1-.33.33H950.78a.33.33,0,0,1-.33-.33V535.55a.32.32,0,0,1,.33-.32h7.44l1.88,1.87a.29.29,0,0,0,.23.1h8.89a.33.33,0,0,1,.33.33Z"
                    transform="translate(-949.79 -530.29)"
                  />
                  <path
                    class="cls-1"
                    d="M952.76,547.74h-.33l-.66-.66v-.33a.33.33,0,0,0-.66,0v1.32a.33.33,0,0,0,.33.33h1.32a.33.33,0,0,0,0-.66Z"
                    transform="translate(-949.79 -530.29)"
                  />
                </svg>
                <span class="text-sm md:text-lg">Archivo</span>
              </router-link>
              <router-link :to="{ name: 'login' }" class="sidemenu-item" data-title="Cerrar Sesión">
                <svg
                  fill="none"
                  class="logout fill-current w-6 h-6 mx-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 38.19 21.19"
                >
                  <path
                    class="cls-1"
                    d="M956,539.24H943.49l2.49-2.49a.76.76,0,0,0-1.07-1.07l-3.78,3.79a.81.81,0,0,0-.17.24.83.83,0,0,0,0,.58.85.85,0,0,0,.17.25l3.78,3.78a.76.76,0,1,0,1.09-1.05l0,0-2.49-2.49H956a.76.76,0,0,0,0-1.52Z"
                    transform="translate(-940.91 -529.41)"
                  />
                  <path
                    class="cls-1"
                    d="M976.82,529.41H967a2.26,2.26,0,0,0-2.27,2.27v4.54a.75.75,0,0,0,.75.75.76.76,0,0,0,.76-.75v-4.54a.76.76,0,0,1,.76-.76h9.83a.76.76,0,0,1,.76.76v16.64a.76.76,0,0,1-.76.76H967a.76.76,0,0,1-.76-.76v-4.54a.76.76,0,0,0-.76-.75.75.75,0,0,0-.75.75v4.54a2.26,2.26,0,0,0,2.27,2.27h9.83a2.26,2.26,0,0,0,2.27-2.27V531.68A2.26,2.26,0,0,0,976.82,529.41Z"
                    transform="translate(-940.91 -529.41)"
                  />
                </svg>
                <span class="text-sm md:text-lg">Cerrar Sesión</span>
              </router-link>
            </div>
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
  @apply fixed w-full bg-white shadow-header;
  z-index: 9999;
  height: 64px;
}
.navmenu {
  @apply flex items-center content-center;
  .nav-item {
    @apply relative font-semibold text-primary mx-8 py-4 hidden;
    &::after {
      @apply absolute h-1 w-full bg-transparent rounded-sm left-0 -bottom-2;
      content: "";
    }
    &.active,
    &.router-link-active {
      @apply text-secondary;
      &::after {
        @apply bg-secondary;
      }
    }
    @screen lg {
      & {
        @apply inline-block;
      }
    }
  }
}
.sepmenu {
  margin-top: 7rem;
}
.opsidemenu {
  position: relative;
  background-color: $color-primary;
  color: $color-white;
  z-index: 10;
  @apply flex items-center justify-between py-3 px-6;
  width: 100%;
  @screen md {
    & {
      @apply px-8;
      width: 21rem;
    }
  }
}
.sidemenu {
  background-color: $color-primary;
  position: absolute;
  height: calc(100vh - 64px);
  width: 0;
  top: 100%;
  right: 0;
  overflow-y: auto;
  z-index: 9;
  @apply shadow-sidemenu;
  @media screen and(min-width: 768px) {
    width: 35%;
    width: 7.5rem;
    overflow-y: initial;
  }
  &:not(.active) {
    .sidemenu-item {
      // &:after {
      //   @apply absolute bg-primary text-white text-center;
      //   content: attr(data-title);
      //   top: 0;
      //   right: 0;
      //   width: 100%;
      //   height: 100%;
      //   opacity: 0;
      //   pointer-events: none;
      // }
      &:hover {
        @apply text-white;
        // transition: all 0.3s ease-in;
        &:after {
          opacity: 1;
        }
        span {
          @apply absolute flex justify-center items-center bg-primary text-white text-center;
          top: 0;
          right: 0;
          width: 13.5rem;
          height: 100%;
          margin-right: 7.5rem;
          opacity: 1;
          pointer-events: none;
          transition: all 0.3s ease;
        }
      }
    }
  }
  .sidemenu-item {
    margin-top: 1rem;
    justify-content: center;
    align-content: center;
    display: flex;
    position: relative;
    @apply flex-col items-center text-white py-4 px-4;
    @screen md {
      @apply flex-row px-12;
    }
    &:hover {
      @apply text-secondary;
    }
    &:first-child {
      margin-top: 2.5rem;
    }
    &:last-child {
      @apply bg-primary_hover;
    }

    svg {
      width: 1.3rem;
      height: 1.3rem;
      margin: 0;
    }
    span {
      // display: none;
      position: absolute;
      // visibility: hidden;
      opacity: 0;
      transition: all 0.3s ease;
      pointer-events: none;
    }
  }
  &.active {
    border-top: 1px solid $color-secondary;
    width: 100%;
    @apply shadow-none;
    .sidemenu-item {
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
        position: relative;
        opacity: 1;
        transition: all 0.3s ease;
      }
    }
  }
}
</style>
