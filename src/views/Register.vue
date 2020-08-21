<template>
    <v-container
            class="fill-height"
            style="margin-top: 3rem"
            fluid
    >
        <v-row
                align="center"
                justify="center"
        >
            <v-col
                    cols="12"
                    sm="8"
                    md="4"
            >
                <v-card class="elevation-12">
                    <v-toolbar
                            color="primary"
                            dark
                            flat
                    >
                        <v-toolbar-title>Register form</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-tooltip bottom>

                            <span>Source</span>
                        </v-tooltip>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                    label="First Name"
                                    name="firstName"
                                    prepend-icon="mdi-account"
                                    v-model="firstName"
                                    type="text"
                            ></v-text-field>

                            <v-text-field
                                    label="Last Name"
                                    name="lastName"
                                    prepend-icon="mdi-account"
                                    v-model="lastName"
                                    type="text"
                            ></v-text-field>

                            <v-text-field
                                    label="Email"
                                    name="email"
                                    prepend-icon="mdi-email"
                                    v-model="email"
                                    type="email"
                            ></v-text-field>

                            <v-text-field
                                    id="password"
                                    label="Password"
                                    name="password"
                                    prepend-icon="mdi-lock"
                                    type="password"
                                    v-model="password"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="submit">Sign Up</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            }
        },

        methods: {
            submit() {
                this.$store.dispatch('registerUser', {
                    first_name: this.firstName,
                    last_name: this.lastName,
                    email: this.email,
                    password: this.password
                })
            }
        }
    }
</script>

<style scoped>

</style>