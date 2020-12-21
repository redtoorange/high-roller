<template>
    <v-card>
        <v-card-title>
            To Wound Special Rules
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col>
                    <v-text-field label="Wound Modifier" type="number"/>
                </v-col>
                <v-col>
                    <v-checkbox label="Re-Roll 1's"/>
                </v-col>
                <v-col>
                    <v-checkbox label="Rending"/>
                </v-col>
            </v-row>
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
