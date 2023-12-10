export default {
    props: {
        refLinks: {
			type: Array,
			default() {
				return []
			}
		}
    },
    methods: {
		refActivate(arr) {
            if (arr.length !== 0) {
                const min = 0
                const max = arr.length - 1
                const random = Math.floor(Math.random() * (max - min + 1)) + min
                window.open(arr[random], '_blank')
            }
        }
	}
}