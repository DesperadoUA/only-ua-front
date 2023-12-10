export default {
	head() {
		return {
			title: this.data.body.meta_title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.data.body.description
				}
			],
			link: [
				{ rel: 'canonical', href: this.data.body.currentUrl }
			]
		}
	}
}
