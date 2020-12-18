<template>
    <v-card>
        <v-card-title>
            To Wound Special Rules
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field label="Wound Modifier" type="number"/>
                <v-checkbox label="Re-Roll 1's"/>
                <v-checkbox label="Special Stats"/>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "WoundSpecialRulesComponent"
}
</script>

<style scoped>

</style>