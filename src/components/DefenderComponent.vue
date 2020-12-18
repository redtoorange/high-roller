<template>
    <v-card>
        <v-card-title>
            Defender Statistics
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-row>
                    <v-col cols="3">
                        <v-text-field label="Toughness" type="number"/>
                    </v-col>
                    <v-col cols="3">
                        <v-text-field label="Armor Save" type="number"/>
                    </v-col>
                    <v-col cols="6">
                        <v-row>
                            <v-col>
                                <v-checkbox v-model="invulnerable" label="Has Invulnerable Save"/>
                            </v-col>
                            <v-col>
                                <v-checkbox v-model="feelNoPain" label="Has Feel No Pain"/>

                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field v-if="invulnerable" label="Invulnerable Save" type="number"/>
                            </v-col>
                            <v-col>
                                <v-text-field v-if="feelNoPain" label="Feel No Pain" type="number"/>
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
    name: "DefenderComponent",

    data() {
        return {
            invulnerable: false,
            feelNoPain: false
        };
    },
}
</script>

<style scoped>

</style>