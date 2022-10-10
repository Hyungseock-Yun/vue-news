<template>
    <div>
        <p v-for="askitem in fetchedAsk" :key="askitem">
            <!-- <a v-bind:href="item.url">{{ item.title }}</a> -->
                <router-link v-bind:to="`item/${askitem.id}`">
                    {{ askitem.title }}
                </router-link>
            <small>{{ askitem.time_ago }} by {{ askitem.user }}</small>
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters([ 'fetchedAsk' ]),

        // #2
        // ...mapState({
        //     ask: state => state.ask
        // })
    },
    
    created() {
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style>

</style>