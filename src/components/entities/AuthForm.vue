<template>
    <div class="auth-page-wrapper pt-5">
        <!-- auth page bg -->
        <div class="auth-one-bg-position auth-one-bg" id="auth-particles">
            <div class="bg-overlay"></div>

            <div class="shape">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 1440 120"
                >
                    <path
                        d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"
                    ></path>
                </svg>
            </div>
        </div>
        <div class="auth-page-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center mt-sm-5 mb-4 text-white-50">
                            <div>
                                <a
                                    href="index.html"
                                    class="d-inline-block auth-logo"
                                >
                                    <img
                                        src="assets/images/logo-light.png"
                                        alt=""
                                        height="20"
                                    />
                                </a>
                            </div>
                            <p class="mt-3 fs-15 fw-medium"></p>
                        </div>
                    </div>
                </div>
                <!-- end row -->

                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="card mt-4">
                            <div class="card-body p-4">
                                <div class="text-center mt-2">
                                    <h5 class="text-primary">Welcome Back !</h5>
                                    <p class="text-muted">
                                        Sign in to continue to Velzon.
                                    </p>
                                </div>
                                <div class="p-2 mt-4">
                                    <Form
                                        action="index.html"
                                        :validation-schema="schema"
                                        @submit="submit"
                                    >
                                        <div class="mb-3">
                                            <AppInput
                                                type="text"
                                                id="username"
                                                placeholder="Enter username"
                                                v-model="username"
                                                name="username"
                                            >
                                                <label
                                                    for="username"
                                                    class="form-label"
                                                    >Username</label
                                                >
                                            </AppInput>
                                        </div>

                                        <div class="mb-3">
                                            <div class="float-end">
                                                <a
                                                    href="auth-pass-reset-basic.html"
                                                    class="text-muted"
                                                    >Forgot password?</a
                                                >
                                            </div>
                                            <label
                                                class="form-label"
                                                for="password-input"
                                                >Password</label
                                            >
                                            <div
                                                class="position-relative auth-pass-inputgroup mb-3"
                                            >
                                                <AppInput
                                                    type="password"
                                                    placeholder="Enter password"
                                                    id="password-input"
                                                    v-model="password"
                                                    name="password"
                                                />

                                                <button
                                                    class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                                    type="button"
                                                    id="password-addon"
                                                >
                                                    <i
                                                        class="ri-eye-fill align-middle"
                                                    ></i>
                                                </button>
                                            </div>
                                        </div>

                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="auth-remember-check"
                                            />
                                            <label
                                                class="form-check-label"
                                                for="auth-remember-check"
                                                >Remember me</label
                                            >
                                        </div>

                                        <div class="mt-4">
                                            <button
                                                class="btn btn-success w-100"
                                                type="submit"
                                            >
                                                Sign In
                                            </button>
                                        </div>

                                        <div class="mt-4 text-center">
                                            <div class="signin-other-title">
                                                <h5 class="fs-13 mb-4 title">
                                                    Sign In with
                                                </h5>
                                            </div>
                                            <div>
                                                <button
                                                    type="button"
                                                    class="btn btn-primary btn-icon waves-effect waves-light"
                                                >
                                                    <i
                                                        class="ri-facebook-fill fs-16"
                                                    ></i>
                                                </button>
                                                <button
                                                    type="button"
                                                    class="btn btn-danger btn-icon waves-effect waves-light"
                                                >
                                                    <i
                                                        class="ri-google-fill fs-16"
                                                    ></i>
                                                </button>
                                                <button
                                                    type="button"
                                                    class="btn btn-dark btn-icon waves-effect waves-light"
                                                >
                                                    <i
                                                        class="ri-github-fill fs-16"
                                                    ></i>
                                                </button>
                                                <button
                                                    type="button"
                                                    class="btn btn-info btn-icon waves-effect waves-light"
                                                >
                                                    <i
                                                        class="ri-twitter-fill fs-16"
                                                    ></i>
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                            <!-- end card body -->
                        </div>
                        <!-- end card -->

                        <div class="mt-4 text-center">
                            <p class="mb-0">
                                Don't have an account ?
                                <a
                                    href="auth-signup-basic.html"
                                    class="fw-semibold text-primary text-decoration-underline"
                                >
                                    Signup
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </div>
    </div>
</template>

<script setup>
import { Form } from 'vee-validate';
import * as yup from 'yup';
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import AppInput from '../common/AppInput.vue';

const store = useStore();
const router = useRouter();
const schema = yup.object({
    username: yup.string().required().min(6),
    password: yup.string().required().min(8)
});

const username = ref('');
const password = ref('');

const submit = async () => {
    await store.dispatch('auth/signIn', {
        username: username.value,
        password: password.value
    });
    router.push('/');
};
</script>
