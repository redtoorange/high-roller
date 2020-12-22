<template>
    <v-card>
        <v-card-title>
            Statistics
        </v-card-title>
        <v-card-text>
            <div>
                <h2>To Hit</h2>
                <div v-if="results.exploded">
                    <p>Exploding added {{ results.explodingRolls.toFixed(2) }} rolls</p>
                </div>
                <p><strong>Hit Chance: {{ (results.hitChance * 100).toFixed(2) }}%</strong></p>
                <h3>Hits: {{ results.hitCount.toFixed(2) }}</h3>
                <p>Misses: {{ results.missCount.toFixed(2) }}</p>
            </div>

            <v-divider class="mb-3"></v-divider>

            <div>
                <h2>To Wound</h2>
                <p><strong>Wound Chance: {{ (results.woundSuccessChance * 100).toFixed(2) }}%</strong></p>

                <h3>Wounds: {{ results.woundCount.toFixed(2) }} </h3>
                <p>Failed: {{ results.woundFailCount.toFixed(2) }}</p>
            </div>

            <v-divider class="mb-3"></v-divider>

            <div>
                <h2>Saving Throws</h2>
                <p><strong>Save Chance: {{ (results.saveSuccessChance * 100).toFixed(2) }}%</strong></p>
                <p>Saved: {{ results.passedSaves.toFixed(2) }} </p>
                <h3>Failed: {{ results.failedSaves.toFixed(2) }}</h3>
                <p v-if="results.useInvulerable"><strong>Used Invulnerable</strong></p>
            </div>

            <v-divider class="mb-3"></v-divider>

            <div>
                <h2>Damage</h2>
                <p>Damage Per Wound: {{ results.damagePerWound.toFixed(2) }} </p>

                <div v-if="results.useFeelNoPain">
                    <p><strong>Feel No Pain Chance: {{ (results.feelNoPainChance * 100).toFixed(2) }}%</strong></p>
                    <p>Saved: {{ results.savedWounds.toFixed(2) }} </p>
                </div>
                <div>
                    <h3>Total Damage: {{ results.totalWounds.toFixed(2) }}</h3>
                </div>

            </div>
        </v-card-text>

        <v-card-actions>
            <slot name="actions"></slot>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "StatisticsComponent",

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
