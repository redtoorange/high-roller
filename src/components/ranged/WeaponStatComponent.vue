<template>
    <v-card>
        <v-card-title>
            Weapon Statistics
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-row>
                    <v-col cols="3">
                        <v-tooltip bottom>
                            <template v-slot:activator="{on, attrs}">
                                <v-text-field v-bind="attrs" v-on="on" label="Attacks per Model" v-model="attacks"/>
                            </template>
                            Enter a whole number of a dice roll like "1D6" or "2D3".
                        </v-tooltip>
                    </v-col>
                    <v-col cols="3">
                        <v-text-field label="Strength" type="number" v-model="strength"/>
                    </v-col>
                    <v-col cols="3">
                        <v-text-field label="Armor Penetration" type="number" v-model="armorPen"/>
                    </v-col>
                    <v-col cols="3">
                        <v-tooltip bottom>
                            <template v-slot:activator="{on, attrs}">
                                <v-text-field v-bind="attrs" v-on="on" label="Damage" v-model="damage"/>
                            </template>
                            Enter a whole number of a dice roll like "1D6" or "2D3".
                        </v-tooltip>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "WeaponStatComponent",

    computed: {
        attacks: {
            get() {
                return this.$store.state.attacks;
            },
            set(value) {
                this.$store.commit('setAttacks', value);
            }
        },
        strength: {
            get() {
                return this.$store.state.strength;
            },
            set(value) {
                this.$store.commit('setStrength', value);
            }
        },
        armorPen: {
            get() {
                return this.$store.state.armorPen;
            },
            set(value) {
                this.$store.commit('setArmorPenetration', value);
            }
        },
        damage: {
            get() {
                return this.$store.state.damage;
            },
            set(value) {
                this.$store.commit('setDamage', value);
            }
        },
    },
}
</script>

<style scoped>

</style>
