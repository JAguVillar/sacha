<template>
  <q-layout view="hHh lpR fFf">
    <!-- <q-header
      class="bg-primary text-white flex items-center"
      height-hint="98"
      style="height: 144px; padding: 0 200px"
    >
      <q-toolbar>
        <q-btn flat round dense icon="menu" class="q-mr-sm" />

        <q-toolbar-title class="flex justify-center">
          <img
            width="136"
            src="@/assets/imagenes/logos/logo_full_sacha.png"
            alt=""
          />
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
