<template>
    <v-container style="margin-top: 3rem;">
        <h1>Hello blog</h1>
        <v-alert color="red">Stay tune still in development mode. will be available soon!</v-alert>
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
            <div>
                <button :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
                    Bold
                </button>
                <button :class="{ 'is-active': isActive.heading({ level: 2 }) }" @click="commands.heading({ level: 2 })">
                    H2
                </button>
            </div>
        </editor-menu-bar>
        <editor-content :editor="editor" />

        <v-btn @click="onClick">Click</v-btn>
    </v-container>
</template>

<script>
    import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
    // import store from '../store'
    import {
        Blockquote,
        CodeBlock,
        HardBreak,
        Heading,
        OrderedList,
        BulletList,
        ListItem,
        TodoItem,
        TodoList,
        Bold,
        Code,
        Italic,
        Link,
        Strike,
        Underline,
        History,
    } from 'tiptap-extensions';
    export default {
        name: "Blog",

        components: { EditorContent, EditorMenuBar},

        data() {
            return {
                editor: new Editor({
                    extensions: [
                        new Blockquote(),
                        new CodeBlock(),
                        new HardBreak(),
                        new Heading({ levels: [1, 2, 3] }),
                        new BulletList(),
                        new OrderedList(),
                        new ListItem(),
                        new TodoItem(),
                        new TodoList(),
                        new Bold(),
                        new Code(),
                        new Italic(),
                        new Link(),
                        new Strike(),
                        new Underline(),
                        new History(),
                    ],})
            };
            },
        mounted() {
            this.editor = new Editor({
                content: '<p>This is just a boring paragraph</p>',
            })
        },

        methods: {
            onClick(){
                this.$store.commit('increment');
                console.log(this.$store.state.count)
            }
        }
    }
</script>

<style scoped>

</style>