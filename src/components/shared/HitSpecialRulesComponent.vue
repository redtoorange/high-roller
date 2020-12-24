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
                    <v-checkbox label="Exploding" v-model="exploding"/>
                    <v-text-field v-if="exploding" label="Explodes on?" v-model="explodesOn"></v-text-field>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "HitSpecialRulesComponent",
    props: {
      type: {
          type: String,
          required: true
      }
    },

    computed: {
        mod: {
            get() {
                return this.$store.state[this.type].attacker.hitRules.mod
            },
            set(value) {
                this.$store.commit(`${this.type}/attacker/setMod`, value)
            }
        },
        reRollOnes: {
            get() {
                return this.$store.state[this.type].attacker.hitRules.reRollOnes;
            },
            set(value) {
                this.$store.commit(`${this.type}/attacker/setReRollOnes`, value)
            }
        },
        reRollMisses: {
            get() {
                return this.$store.state[this.type].attacker.hitRules.reRollMisses;
            },
            set(value) {
                this.$store.commit(`${this.type}/attacker/setReRollMisses`, value)
            }
        },
        exploding: {
            get() {
                return this.$store.state[this.type].attacker.hitRules.exploding;
            },
            set(value) {
                this.$store.commit(`${this.type}/attacker/setExploding`, value)
            }
        },
        explodesOn: {
            get() {
                return this.$store.state[this.type].attacker.hitRules.explodesOn;
            },
            set(value) {
                this.$store.commit(`${this.type}/attacker/setExplodesOn`, value)
            }
        }
    }
}
</script>

<style scoped>

</style>
