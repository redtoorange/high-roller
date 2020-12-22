<template>
    <v-card>
        <v-card-title>
            Weapon Statistics
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-row>
                    <v-col cols="12" md="3">
                        <!--                        <v-tooltip bottom>-->
                        <!--                            <template v-slot:activator="{on, attrs}">-->
                        <!--                                <v-text-field v-bind="attrs" v-on="on" label="Shots" v-model="attacks"/>-->
                        <!--                            </template>-->
                        <!--                            Enter a whole number of a dice roll like "1D6" or "2D3".-->
                        <!--                        </v-tooltip>-->
                        <v-text-field type="number" label="Shots" v-model="attacks"/>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-text-field label="Strength" type="number" v-model="strength"/>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-text-field label="Armor Penetration" type="number" v-model="armorPen"/>
                    </v-col>
                    <v-col cols="12" md="3">
                        <!--                        <v-tooltip bottom>-->
                        <!--                            <template v-slot:activator="{on, attrs}">-->
                        <!--                                <v-text-field v-bind="attrs" v-on="on" label="Damage" v-model="damage"/>-->
                        <!--                            </template>-->
                        <!--                            Enter a whole number of a dice roll like "1D6" or "2D3".-->
                        <!--                        </v-tooltip>-->

                        <v-text-field type="number" label="Damage" v-model="damage"/>
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
                return this.$store.state.weapon.attacks;
            },
            set(value) {
                this.$store.commit('weapon/setAttacks', value);
            }
        },
        strength: {
            get() {
                return this.$store.state.weapon.strength;
            },
            set(value) {
                this.$store.commit('weapon/setStrength', value);
            }
        },
        armorPen: {
            get() {
                return this.$store.state.weapon.armorPen;
            },
            set(value) {
                this.$store.commit('weapon/setArmorPenetration', value);
            }
        },
        damage: {
            get() {
                return this.$store.state.weapon.damage;
            },
            set(value) {
                this.$store.commit('weapon/setDamage', value);
            }
        },
    },
}
</script>

<style scoped>

</style>
