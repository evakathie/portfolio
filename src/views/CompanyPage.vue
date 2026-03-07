<template>
    <div class="company">  
        <div class="page-header">
            <div class="text">
                <h1>{{ company.name }}</h1>
                <p>{{ company.description }}</p>
                <a class="button" :href="company.website" target="blank">Visit {{ company.name }}'s website</a>
            </div>
            <img :src="company.image" alt="">
        </div>

        <ProjectList :companyFilter="company.slug" />

        <div class="align-center">
            <router-link to="/work" class="button">
                View all my projects
            </router-link>
        </div>
    </div>
</template>

<script>
import { companies } from '@/data/companies'
import ProjectList from '@/components/project/ProjectList.vue'

export default {
    name: 'CompanyDetail',

    components: {
        ProjectList
    },

    computed: {
        // Find company based on URL slug
        company() {
            const slug = this.$route.params.slug
            return companies.find(p => p.slug === slug)
        },

    }
}
</script>