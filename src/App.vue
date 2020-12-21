<template>
    <v-app>
        <v-app-bar
            app
            color="orange darken-3"
        >
            <v-toolbar-title>
                40K - High Roller
            </v-toolbar-title>

            <v-toolbar-items class="hidden-sm-and-down ml-3">
                <v-divider vertical></v-divider>

<!--                <v-btn text to="/">-->
<!--                    Home-->
<!--                </v-btn>-->

                <v-divider vertical></v-divider>

                <v-btn text to="/melee" disabled>
                    Melee
                </v-btn>

                <v-divider vertical></v-divider>

                <v-btn text to="/ranged">
                    Ranged
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>

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
};
</script>
