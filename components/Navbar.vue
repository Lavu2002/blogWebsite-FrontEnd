<template>
  <v-app>
    <div class="desktop-view">
        <v-app-bar 
          scroll-behavior="fade-image hide"
          scroll-threshold="210"
          image="https://images.unsplash.com/photo-1557683316-973673baf926?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D"
        ></v-app-bar>
    </div>
    <div class="mobile-view">
        <v-card max-width="448" class="mx-auto" color="grey-lighten-3">
      <v-layout>
        <v-app-bar
          color="teal-darken-4"
          image="https://picsum.photos/1920/1080?random"
        >
          <template v-slot:image>
            <v-img
              gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
            ></v-img>
          </template>

          <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </template>

          <v-app-bar-title>Title</v-app-bar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-app-bar>

        <v-main>
          <v-container fluid>
            <v-row dense>
              <v-col v-for="n in 4" :key="n" cols="12">
                <v-card
                  :title="`Content ${n}`"
                  :subtitle="`Subtitle for Content ${n}`"
                  text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
                ></v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-layout>
        </v-card>
    </div>
  </v-app>
</template>
<style scoped>
.nav-container {
  padding: 1% 5%;
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
:deep .v-application__wrap{
    min-height: 100px;
}
:deep .v-toolbar{
    height: 80px
}
</style>
