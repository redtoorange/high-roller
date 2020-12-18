<template>
    <v-card>
        <v-card-title>
            Saving Throws
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field label="Armor Penetration" type="number"/>
                <v-divider></v-divider>
                <v-text-field label="Armor Save" type="number"/>
                <v-checkbox label="Has Invulnerable" v-model="invulnerable"/>
                <div v-if="invulnerable">
                    <v-text-field label="Invulnerable Save" type="number"/>
                </div>
                <v-checkbox label="Has Feel No Pain" v-model="feelNoPain"/>
                <div v-if="feelNoPain">
                    <v-text-field label="Feel No Pain" type="number"/>
                </div>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "SaveComponent",

    data() {
        return {
            invulnerable: false,
            feelNoPain: false,
        };
    },
}
</script>

<style scoped>
.smooth-enter-active, .smooth-leave-active {
    transition: max-height .5s;
}
.smooth-enter, .smooth-leave-to {
    max-height: 0;
}
</style>