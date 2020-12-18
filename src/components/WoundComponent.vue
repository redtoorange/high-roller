<template>
    <v-card>
        <v-card-title>
            To Wound
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field label="Weapon Strength" type="number"/>
                <v-text-field label="Weapon Wounds" type="number"/>

                <v-divider></v-divider>
                <v-text-field label="Target Toughness" type="number"/>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "WoundComponent"
}
</script>

<style scoped>

</style>