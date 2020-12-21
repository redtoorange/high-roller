<template>
    <v-card>
        <v-card-title>
            Simulation Results
        </v-card-title>
        <v-card-text>
            <div>
                <h3>To Hit</h3>
                <p>Hits: {{ results.hitSuccessRolls }} </p>
                <p>Misses: {{ results.hitFailRolls }}</p>
                <p><strong>Total: {{ results.hitCount }}</strong></p>
            </div>

            <v-divider class="mb-3"></v-divider>

            <div>
                <h3>To Wound</h3>
                <p>Wounded: {{ results.woundSuccessRolls }} </p>
                <p>Failed: {{ results.woundFailRolls }}</p>
                <p><strong>Total: {{ results.woundCount }}</strong></p>
            </div>

            <v-divider class="mb-3"></v-divider>

            <div>
                <h3>Saving Throws</h3>
                <p>Saved: {{ results.saveSuccessRolls }} </p>
                <p>Failed: {{ results.saveFailRolls }}</p>
                <p><strong>Total: {{ results.failedSaves }}</strong></p>
            </div>

            <v-divider class="mb-3"></v-divider>

            <div>
                <h3>
                    Total Wounds: {{ results.failedSaves }}
                </h3>
            </div>
        </v-card-text>

        <v-card-actions>
            <slot name="actions"></slot>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "SimulatedRollComponent",

    props: {
        results: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>

</style>
