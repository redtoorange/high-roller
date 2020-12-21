<template>
    <v-card>
        <v-card-title>
            To Hit Special Rules
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="12" md="3">
                    <v-text-field label="Hit Modifier" type="number" v-model="mod"/>
                </v-col>
                <v-col cols="12" md="3">
                    <v-checkbox label="Re-Roll 1's" v-model="reRollOnes"/>
                </v-col>
                <v-col cols="12" md="3">
                    <v-checkbox label="Re-Roll Misses" v-model="reRollMisses"/>
                </v-col>
                <v-col cols="12" md="3">
                    <v-checkbox label="Exploding 6's" v-model="explodingSixes"/>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "HitSpecialRulesComponent",

    computed: {
        mod: {
            get() {
                return this.$store.state.attacker.hitRules.mod
            },
            set(value) {
                this.$store.commit('attacker/setMod', value)
            }
        },
        reRollOnes: {
            get() {
                return this.$store.state.attacker.hitRules.reRollOnes;
            },
            set(value) {
                this.$store.commit('attacker/setReRollOnes', value)
            }
        },
        reRollMisses: {
            get() {
                return this.$store.state.attacker.hitRules.reRollMisses;
            },
            set(value) {
                this.$store.commit('attacker/setReRollMisses', value)
            }
        },
        explodingSixes: {
            get() {
                return this.$store.state.attacker.hitRules.explodingSixes;
            },
            set(value) {
                this.$store.commit('attacker/setExplodingSixes', value)
            }
        }
    }
}
</script>

<style scoped>

</style>
