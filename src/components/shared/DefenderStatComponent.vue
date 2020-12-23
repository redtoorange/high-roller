<template>
    <v-card>
        <v-card-title>
            Defender Statistics
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="12" md="3">
                    <v-text-field label="Toughness*" type="number" v-model="toughness" :rules="notEmpty"/>
                </v-col>
                <v-col cols="12" md="3">
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
                                <v-text-field v-if="hasInvulnerable" label="Invulnerable Save" type="number"
                                              v-model="invulnerableSave"/>
                            </transition>
                        </v-col>
                        <v-col>
                            <transition name="slide-fade">
                                <v-text-field v-if="hasFeelNoPain" label="Feel No Pain" type="number"
                                              v-model="feelNoPainSave"/>
                            </transition>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "DefenderStatComponent",
    data() {
        return {
            notEmpty: [v => !!v || 'Required Field']
        };
    },
    computed: {
        toughness: {
            get() {
                return this.$store.state.defender.toughness;
            },
            set(value) {
                this.$store.commit('defender/setToughness', value);
            }
        },
        armorSave: {
            get() {
                return this.$store.state.defender.armorSave;
            },
            set(value) {
                this.$store.commit('defender/setArmorSave', value);
            }
        },

        hasInvulnerable: {
            get() {
                return this.$store.getters['defender/hasInvulnerable'];
            },
            set(value) {
                this.$store.commit('defender/setHasInvulnerable', value);
            }
        },
        invulnerableSave: {
            get() {
                return this.$store.state.defender.invulnerableSave;
            },
            set(value) {
                this.$store.commit('defender/setInvulnerableSave', value);
            }
        },

        hasFeelNoPain: {
            get() {
                return this.$store.getters['defender/hasFeelNoPain'];
            },
            set(value) {
                this.$store.commit('defender/setHasFeelNoPain', value);
            }
        },
        feelNoPainSave: {
            get() {
                return this.$store.state.defender.feelNoPainSave;
            },
            set(value) {
                this.$store.commit('defender/setFeelNoPainSave', value);
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
