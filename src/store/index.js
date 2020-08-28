import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import router from "@/router";

// import {router} from "../main.js"

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        blogs: {},
        token: '',
        username: '',
        status: '',
        isLoading: false,
        userDetail: {},
    },
    mutations: {

        AUTH_SUCCESS(state, data) {
            state.status = 'authenticated';
            state.token = data
            router.push('/')
        },
        AUTH_LOGOUT(state) {
            state.token = null;
            state.username = null;
        },
        AUTH_ERROR(state) {
            state.status = 'error'
            state.token = null;
        },
        AUTH_REQUEST(state) {
            state.status = 'loading'
        },
        INIT_AUTH(state, data) {
            state.token = data.token
            state.username = data.username
        },
        AUTH_USERNAME(state, data) {
            state.username = data;
        },

        SET_ALL_BLOGS(state, data) {
            state.blogs = data;

        },

        SET_USER_DETAIL(state, data) {
            state.userDetail = data;
        },

        SET_LOADING_STATE(state, data) {
            state.isLoading = data;
        }
    },

    actions: {

        inIt(context) {
            const userToken = localStorage.getItem('user-token')
            const userName = localStorage.getItem('username')
            context.commit('INIT_AUTH', {token: userToken, username: userName})
        },

        registerUser(context, data) {
            axios.post('https://codeforsolutionsbackend.herokuapp.com/api/users/register/', data).then(res => {
                context.dispatch('userLogin', {username: res.data.username, password: data.password});
            }).catch(
                err => console.log(err)
            )
        },

        userLogin(context, data) {
            axios.post('https://codeforsolutionsbackend.herokuapp.com/api/token/', data,).then((res) => {
                const token = res.data.token
                localStorage.setItem('user-token', token)
                context.commit('AUTH_SUCCESS', token)

                localStorage.setItem('username', JSON.parse(res.config.data).username)
                context.commit('AUTH_USERNAME', JSON.parse(res.config.data).username)

            }).catch((err) => {
                console.log(err)

                localStorage.removeItem('username')
                localStorage.removeItem('user-token')
                context.commit('AUTH_ERROR')
            })

        },

        userLogout(context) {

            localStorage.removeItem('user-token')
            localStorage.removeItem('username')
            context.commit('AUTH_LOGOUT')

        },

        getUserDetail(context) {
            const token = localStorage.getItem('user-token')
            axios.post('https://codeforsolutionsbackend.herokuapp.com/api/users/user-by-token/',
                {token: token}).then(res => {
                context.commit('SET_USER_DETAIL', res.data)
            }).catch(err => console.log(err))
        },


        fetchBlogs(context) {
            context.commit('SET_LOADING_STATE', true)
            axios.get('https://codeforsolutionsbackend.herokuapp.com/api/blogs/').then(res => {
                context.commit('SET_LOADING_STATE', false)
                store.commit('SET_ALL_BLOGS', res.data)

            }).catch(err => {
                context.commit('SET_LOADING_STATE', false)
                console.log(err)
            })

        },

        createBlog(context, data) {
            axios.post('https://codeforsolutionsbackend.herokuapp.com/api/blogs/create/', data,
                {
                    headers: {
                        // 'content-type': 'multipart/form-data',
                        'Authorization': `token ${context.state.token}`
                    }
                }
            ).then(res => {
                router.push('/blog/');
                console.log(res.data.message)
            })
        }
    },

    getters: {
        isLoadingStatus: state => {
            return state.isLoading;
        },
        blogs: state => {
            return state.blogs;
        }
    }
})