<template>
    <v-card>
        <v-card-title>
            Defender Statistics
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-row>
                    <v-col cols="3">
                        <v-text-field label="Toughness" type="number" v-model="toughness"/>
                    </v-col>
                    <v-col cols="3">
                        <v-text-field label="Armor Save" type="number" v-model="armorSave"/>
                    </v-col>
                    <v-col cols="6">
                        <v-row>
                            <v-col>
                                <v-checkbox v-model="hasInvulnerable" label="Has Invulnerable Save"/>
                            </v-col>
                            <v-col>
                                <v-checkbox v-model="hasFeelNoPain" label="Has Feel No Pain"/>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <transition name="slide-fade">
                                    <v-text-field v-if="hasInvulnerable" label="Invulnerable Save" type="number" v-model="invulnerableSave"/>
                                </transition>
                            </v-col>
                            <v-col>
                                <transition name="slide-fade">
                                    <v-text-field v-if="hasFeelNoPain" label="Feel No Pain" type="number" v-model="feelNoPainSave"/>
                                </transition>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "DefenderStatComponent",

    computed: {
        toughness: {
            get() {
                return this.$store.state.toughness;
            },
            set(value) {
                this.$store.commit('setToughness', value);
            }
        },
        armorSave: {
            get() {
                return this.$store.state.armorSave;
            },
            set(value) {
                this.$store.commit('setArmorSave', value);
            }
        },

        hasInvulnerable: {
            get() {
                return this.$store.getters.hasInvulnerable;
            },
            set(value) {
                this.$store.commit('setHasInvulnerable', value);
            }
        },
        invulnerableSave: {
            get() {
                return this.$store.state.invulnerableSave;
            },
            set(value) {
                this.$store.commit('setInvulnerableSave', value);
            }
        },

        hasFeelNoPain: {
            get() {
                return this.$store.getters.hasFeelNoPain;
            },
            set(value) {
                this.$store.commit('setHasFeelNoPain', value);
            }
        },
        feelNoPainSave: {
            get() {
                return this.$store.state.feelNoPainSave;
            },
            set(value) {
                this.$store.commit('setFeelNoPainSave', value);
            }
        },
    },
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
    transform: translateY(-10px);
    opacity: 0;
}
</style>
