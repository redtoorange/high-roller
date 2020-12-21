<template>
    <v-card>
        <v-card-title>
            To Hit Special Rules
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col>
                    <v-text-field label="Hit Modifier" type="number"/>
                </v-col>
                <v-col>
                    <v-checkbox label="Re-Roll 1's"/>
                </v-col>
                <v-col>
                    <v-checkbox label="Re-Roll Misses"/>
                </v-col>
                <v-col>
                    <v-checkbox label="Exploding 6's"/>
                </v-col>
            </v-row>
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
