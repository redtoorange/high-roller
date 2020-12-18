<template>
    <v-card>
        <v-card-title>
            Attacker Statistics
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-row>
                    <v-col cols="3">
                        <v-text-field label="Models" type="number"/>
                    </v-col>
                    <v-col cols="3">
                        <v-text-field label="BS/WS" type="number"/>
                    </v-col>
                    <v-col cols="3">
                        <v-checkbox label="To Hit Special Rules" @change="onHitSpecialRules"/>
                    </v-col>
                    <v-col cols="3">
                        <v-checkbox label="To Wound Special Rules" @change="onWoundSpecialRules"/>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "AttackerComponent",
    events: ['hit-special-rules', 'wound-special-rules'],
    methods: {
        onHitSpecialRules(event) {
            this.$emit('hit-special-rules', event)
        },
        onWoundSpecialRules(event) {
            this.$emit('wound-special-rules', event)
        },
    }
}
</script>

<style scoped>

</style>