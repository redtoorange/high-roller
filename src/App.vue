<template>
    <v-app>
        <v-app-bar
            app
            dark
            color="purple darken-1"
        >
            <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>
                40K - High Roller
            </v-toolbar-title>

            <v-toolbar-items class="ml-3 hidden-sm-and-down">
                <v-divider vertical></v-divider>

                <v-btn text to="/melee">
                    Melee
                </v-btn>

                <v-divider vertical></v-divider>

                <v-btn text to="/ranged">
                    Ranged
                </v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>

            <v-toolbar-items class="hidden-sm-and-down">
                <v-container fluid>
                    <v-switch
                        v-model="$vuetify.theme.dark"
                        color="secondary"
                        label="Theme"
                        persistent-hint
                        hint="Eye Burn Warning"
                    ></v-switch>
                </v-container>

            </v-toolbar-items>
        </v-app-bar>


        <v-navigation-drawer
            v-model="drawer"
            fixed
            temporary
        >
            <v-list
                nav
            >
                <v-list-item-group>
                    <v-list-item to="/melee">
                        <v-list-item-title>Melee</v-list-item-title>
                    </v-list-item>

                    <v-list-item to="/ranged">
                        <v-list-item-title>Ranged</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>


        <v-main>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            drawer: false,
        };
    },
};
</script>
