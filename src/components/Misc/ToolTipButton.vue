<template>
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
            <div v-on="on" class="d-inline-block">
                <v-btn @click="onClick" color="primary" class="ml-2" ref="percent-button" :disabled="disabled">
                    {{ label }}
                </v-btn>
            </div>
        </template>
        <span>
            {{ toolTip }}
        </span>
    </v-tooltip>
</template>

<script>
export default {
    name: "ToolTipButton",
    props: {
        onClick: {},
        disabled: {},
        label: {},
        toolTip: {},
    },
}
</script>

<style scoped>

</style>
