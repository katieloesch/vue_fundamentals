const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Sarah',
            lastName: 'Connor',
            url: 'https://google.com',
            raw_url: '<a href="https://google.com" target="_blank">Google</a>',
            age: 25
        }
    },
    methods: {
        fullName() {
            return ` ${this.firstName} ${this.lastName.toUpperCase()}`
        },
        increment() {
            this.age++
        },
        updateLastName(msg, event) {
            event.preventDefault()
            console.log(msg)
            this.lastName = event.target.value
        }
    }
}).mount('#app')

// setTimeout(() => {
//     vm.firstName = 'John'
// }, 2000)

// Vue.createApp({
//     data() {
//         return {
//             firstName: 'Laura',
//             lastName: 'Gellar'
//         }
//     }
// }).mount('#app2')