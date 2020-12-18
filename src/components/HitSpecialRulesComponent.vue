<template>
    <v-card>
        <v-card-title>
            To Hit Special Rules
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field label="Hit Modifier" type="number"/>
                <v-checkbox label="Re-Roll 1's"/>
                <v-checkbox label="Exploding 6's"/>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "HitSpecialRulesComponent"
}
</script>

<style scoped>

</style>