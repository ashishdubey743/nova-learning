<template>
    <div class="flex justify-center items-center">
        <!-- Use a regular 'a' tag with Inertia.js for client-side navigation -->
        <a @click.prevent="goToProfile" class="btn btn-primary custom-blue-background">
            Create Profile
        </a>
    </div>
</template>

<script>
export default {
    methods: {
        goToProfile() {
            // Use Inertia to navigate to the registered 'Profile' route
            Nova.visit('/profile');
        }
    }
}
</script>

<style scoped>
.btn {
    padding: 8px 9px;
    color: #fff;
    font-size: 1rem;
    border-radius: 0.375rem;
    text-decoration: none;
    transition: all 0.3s ease;
}

</style>
