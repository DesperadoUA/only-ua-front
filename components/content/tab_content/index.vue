<template>
	<section class="cms">
		<div class="tabs">
			<button
				class="tab_item"
				:data-active="currentTab === index"
				v-for="(item, index) in value"
				:key="index"
				@click="changeTab(index)"
			>
				{{ item.title }}
			</button>
		</div>
		<article class="container tab_text_container">
			<div
				class="cms"
				v-show="currentTab === index"
				v-for="(item, index) in value"
				v-html="item.content"
				:key="index"
			></div>
		</article>
	</section>
</template>

<script>
export default {
	name: 'tab_content',
	data() {
		return {
			currentTab: 0
		}
	},
	props: {
		value: {
			type: Array,
			default() {
				return []
			}
		}
	},
	methods: {
		changeTab(index) {
			this.currentTab = index
		}
	}
}
</script>
<style scoped>
.tabs {
	display: flex;
}
.tab_item {
	width: 197px;
	height: 62px;
	background: rgba(35, 32, 54, 1);
	cursor: pointer;
	border: none;
	opacity: 0.6;
	color: var(--cairo);
	text-transform: uppercase;
	font-size: 14px;
	font-weight: 700;
}
.tab_item:last-child {
	border-top-right-radius: 12px;
}
.tab_item:first-child {
	border-top-left-radius: 12px;
}
[data-active='true'] {
	background: rgba(35, 32, 54, 1);
	opacity: 1;
}
.tab_text_container {
	border-radius: 0px 12px 12px 12px;
	padding: 24px 20px 42px 20px;
	background: rgba(35, 32, 54, 1);
}
@media (min-width: 768px) and (max-width: 1200px) {
	.tab_text_container {
		max-width: 100%;
	}
}
</style>
