<template>
	<div class="search">
		<!--
		<input :placeholder="t('SEARCH')" class="input" v-model="searchWord" v-on:keyup.enter="search" />
		<button type="button" class="btn-default search__cta" @click="search">
			<AImg :attributes="imgSettings" src="/img/search.png" />
		</button>
		<div class="search-box" v-if="posts.length && searchWord.length">
			<ul class="search-suggest" v-if="posts.length !== 0">
				<li v-for="(item, index) in posts" :key="index" @click="goToSearch">
					<NuxtLink :to="item.permalink">
						{{ item.title }}
					</NuxtLink>
				</li>
			</ul>
		</div>
	-->
	</div>
</template>
<script>
import components from '~/mixins/components'
export default {
	name: 'app-search',
	mixins: [components],
	data() {
		return {
			posts: [],
			searchWord: '',
			imgSettings: {
				width: '20px',
				height: '20px'
			}
		}
	}
	/*
	computed: {
		showSearch() {
			return this.$store.getters['common/getShowSearch']
		}
	},
	methods: {
		searchActivate() {
			this.$store.dispatch('common/setShowSearch', !this.$store.getters['common/getShowSearch'])
		},
		async search() {
			if (this.searchWord === '') return
			const request = new DAL_Builder()
			const response = await request
				.url('search')
				.setSearch(true)
				.searchWold(this.searchWord)
				.get()
			if (response.data.confirm !== 'error') {
				console.log('Search good')
				this.posts = response.data.body.posts
			}
		},
		goToSearch() {
			this.$store.dispatch('common/setShowSearch', !this.$store.getters['common/getShowSearch'])
			this.posts = []
			this.searchWord = ''
		}
	},
	watch: {
		searchWord() {
			if (this.searchWord === '') this.posts = []
		}
	}
	*/
}
</script>

<style scoped lang="scss">
.search {
	max-width: 100%;
	width: 624px;
	display: flex;
	background: rgba(16, 13, 36, 0.28);
	border-radius: 14px;
	padding-right: 15px;
	position: relative;
}
.input {
	flex-grow: 1;
	height: 40px;
	background: transparent;
	color: var(--cairo);
	border: none;
	padding-left: 15px;
}
.input::placeholder {
	color: var(--cairo);
}
.input:active,
.input:hover,
.input:focus {
	outline: 0;
	outline-offset: 0;
}
%btn-general {
	font-family: var(--base-font-family);
	display: inline-flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	text-decoration: none;
	background-color: transparent;
	border: 0;
	padding: 0;
}

.btn-default {
	@extend %btn-general;
	font-size: 18px;
	font-weight: 500;
	line-height: 1.1;
	text-align: center;
	position: relative;
	padding: 0;
}
.search-box {
	position: absolute;
	width: 100%;
	z-index: 4;
	background: #311b92ff;
	border-radius: 12px;
	padding-left: 15px;
	padding-right: 5px;
	border: 1px var(--cairo);
}
.search-box a {
	color: var(--cairo);
	text-decoration: none;
}
.search-box ul {
	list-style: none;
	padding-left: 0px;
}
.search-box {
	top: 50px;
}
@media (max-width: 767px) {
	.search-box {
		top: 50px;
	}
}
</style>
