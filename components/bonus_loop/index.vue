<template>
	<div>
		<div class="bonus_loop">
			<BonusMainCard
				v-for="(item, index) in currentPosts"
				:key="index"
				:bg="item.bg"
				:label="item.label"
				:rating="parseInt(item.rating)"
				:src="item.src"
				:title="item.title"
				:value="item.value"
				:desc="item.desc"
				:refLinks="item.ref"
			/>
		</div>
		<div class="items-more" v-if="hideBtnShowMore">
			<div class="btn_wrapper">
				<AButton @onClick="postShowMore" :attributes="btnSettings">
					{{ t('SHOW_MORE') }}
				</AButton>
			</div>
		</div>
	</div>
</template>

<script>
import { BONUS as NumberPostOnQuery } from '~/config/postLoader'
import BonusMainCard from '~/components/bonus_loop/cards/main'
import postLoader from '~/mixins/postLoader'
import components from '~/mixins/components'
export default {
	name: 'bonus_loop',
	components: { BonusMainCard },
	props: {
		value: {
			type: Array,
			default() {
				return []
			}
		}
	},
	mixins: [components, postLoader],
	data() {
		return {
			numberPostOnQuery: NumberPostOnQuery,
			btnSettings: {
				color: 'cleveland',
				class: 'load_more',
				weight: 'bold',
				size: 'medium'
			}
		}
	}
}
</script>
<style scoped>
.bonus_loop {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-bottom: 30px;
}
.load_more {
	border: 1px solid var(--cucuta);
	border-radius: 8px;
}
.items-more {
	display: flex;
	justify-content: center;
	height: 52px;
	margin-top: 0px;
	margin-bottom: 60px;
}
.btn_wrapper {
	max-width: 272px;
	width: 206px;
}
@media (max-width: 767px) {
	.bonus_item {
		width: 100%;
	}
	.items-more {
		width: 100%;
	}
	.bonus_loop {
		justify-content: center;
	}
}
@media (min-width: 768px) and (max-width: 1200px) {
	.bonus_loop {
		gap: 12px;
	}
	.bonus_item {
		width: 48%;
	}
	.items-more {
		width: 100%;
	}
}
</style>
