<template>
    <v-card>
        <v-card-title>
            To Wound Special Rules
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="12" md="3">
                    <v-text-field label="Wound Modifier" type="number" v-model="mod"/>
                </v-col>
                <v-col cols="12" md="3">
                    <v-checkbox label="Re-Roll 1's" v-model="reRollOnes"/>
                </v-col>
                <v-col cols="12" md="3">
                    <v-checkbox label="Re-Roll Failed" v-model="reRollMisses"/>
                </v-col>
                <v-col cols="12" md="3">
                    <v-checkbox label="Rending" v-model="rending"/>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "WoundSpecialRulesComponent",
    props: {
        type: {
            type: String,
            required: true
        }
    },
    computed: {
        mod: {
            get() {
                return this.$store.state[this.type].weapon.woundRules.mod;
            },
            set(value) {
                this.$store.commit(`${this.type}/weapon/setMod`, value);
            }
        },
        reRollOnes: {
            get() {
                return this.$store.state[this.type].weapon.woundRules.reRollOnes;
            },
            set(value) {
                this.$store.commit(`${this.type}/weapon/setReRollOnes`, value);
            }
        },
        reRollMisses: {
            get() {
                return this.$store.state[this.type].weapon.woundRules.reRollMisses;
            },
            set(value) {
                this.$store.commit(`${this.type}/weapon/setReRollMisses`, value);
            }
        },
        rending: {
            get() {
                return this.$store.state[this.type].weapon.woundRules.rending;
            },
            set(value) {
                this.$store.commit(`${this.type}/weapon/setRending`, value);
            }
        }
    }
}
</script>

<style scoped>

</style>
