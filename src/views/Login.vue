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
                        <v-toolbar-title>Login form</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-tooltip bottom>

                            <span>Source</span>
                        </v-tooltip>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                    label="Username"
                                    name="Username"
                                    prepend-icon="mdi-account"
                                    type="text"
                                    v-model="username"
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
                        <v-btn color="primary" @click="login">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Login",

        data(){
            return {
                username: null,
                password: null,
            }
        },
        methods: {
            login(){
                this.$store.dispatch('userLogin', {username: this.username, password: this.password})
            }
        }
    }
</script>

<style scoped>

</style>