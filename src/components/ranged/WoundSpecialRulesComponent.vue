<template>
    <v-card>
        <v-card-title>
            To Wound Special Rules
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col>
                    <v-text-field label="Wound Modifier" type="number" v-model="mod"/>
                </v-col>
                <v-col>
                    <v-checkbox label="Re-Roll 1's" v-model="reRollOnes"/>
                </v-col>
                <v-col>
                    <v-checkbox label="Re-Roll Failed" v-model="reRollMisses"/>
                </v-col>
                <v-col>
                    <v-checkbox label="Rending" v-model="rending"/>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "WoundSpecialRulesComponent",

    computed: {
        mod: {
            get() {
                return this.$store.state.weapon.woundRules.mod;
            },
            set(value) {
                this.$store.commit('weapon/setMod', value);
            }
        },
        reRollOnes: {
            get() {
                return this.$store.state.weapon.woundRules.reRollOnes;
            },
            set(value) {
                this.$store.commit('weapon/setReRollOnes', value);
            }
        },
        reRollMisses: {
            get() {
                return this.$store.state.weapon.woundRules.reRollMisses;
            },
            set(value) {
                this.$store.commit('weapon/setReRollMisses', value);
            }
        },
        rending: {
            get() {
                return this.$store.state.weapon.woundRules.rending;
            },
            set(value) {
                this.$store.commit('weapon/setRending', value);
            }
        }
    }
}
</script>

<style scoped>

</style>
