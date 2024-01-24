import { defineStore } from 'pinia'
import user from './user.js'

export const storePinia = defineStore('user', user);
