<template>
    <div>
        <v-row>
            <v-col>
                <h1>
                    Home
                </h1>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import SimEngine from "@/services/SimEngine";

export default {
    name: 'Home',
    components: {},
    data() {
        return {
            rolls: [],
        };
    },

    computed: {
        ...mapGetters(['hitSpecialRules', 'woundSpecialRules']),
    },

    methods: {
        roll() {
            console.log(SimEngine.runCalculations(this.$store.state))
        }
    }
}
</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
    transition: all .15s ease-in;
}

.slide-fade-leave-active {
    transition: all .15s ease-out;
}

.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */
{
    transform: translateY(-15px);
    opacity: 0;
}
</style>
