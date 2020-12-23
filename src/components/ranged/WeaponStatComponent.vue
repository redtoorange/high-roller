<template>
    <v-card>
        <v-card-title>
            Weapon Statistics
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="12" md="3">
                    <!--                        <v-tooltip bottom>-->
                    <!--                            <template v-slot:activator="{on, attrs}">-->
                    <!--                                <v-text-field v-bind="attrs" v-on="on" label="Shots" v-model="attacks"/>-->
                    <!--                            </template>-->
                    <!--                            Enter a whole number of a dice roll like "1D6" or "2D3".-->
                    <!--                        </v-tooltip>-->
                    <v-text-field type="number" label="Shots*" v-model="attacks" :rules="notEmpty" required/>
                </v-col>
                <v-col cols="12" md="3">
                    <v-text-field label="Strength*" type="number" v-model="strength" :rules="notEmpty" required/>
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
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "WeaponStatComponent",
    data() {
        return {
            notEmpty: [v => !!v || 'Required Field']
        };
    },
    computed: {
        attacks: {
            get() {
                return this.$store.state.ranged.weapon.attacks;
            },
            set(value) {
                this.$store.commit('ranged/weapon/setAttacks', value);
            }
        },
        strength: {
            get() {
                return this.$store.state.ranged.weapon.strength;
            },
            set(value) {
                this.$store.commit('ranged/weapon/setStrength', value);
            }
        },
        armorPen: {
            get() {
                return this.$store.state.ranged.weapon.armorPen;
            },
            set(value) {
                this.$store.commit('ranged/weapon/setArmorPenetration', value);
            }
        },
        damage: {
            get() {
                return this.$store.state.ranged.weapon.damage;
            },
            set(value) {
                this.$store.commit('ranged/weapon/setDamage', value);
            }
        },
    },
}
</script>

<style scoped>

</style>
