<template>
    <div v-once class="flex items-center justify-center h-screen">
        <div class="text-center">
            <h1 class="text-6xl font-medium text-gray-800">404</h1>
            <h2 class="text-lg font-medium text-gray-600 mt-3">
                Page not found
            </h2>
            <p class="text-gray-500 mt-5">
                The page you're looking for doesn't exist.
            </p>
            <router-link class="btn btn-blue mt-5" to="/"
                >Go back to Home</router-link
            >
        </div>
    </div>
</template>
