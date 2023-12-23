<template>
	<div>
		<div class="bonus_loop">
            <BonusMainCard
                v-for="(item, index) in value"
                :key="index"
                :bg="item.bg"
                :label="item.label"
                :rating="item.rating"
                :src="item.thumbnail"
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
				color: 'cairo',
				class: 'load_more',
				weight: 'bold',
				size: 'medium'
			},
		}
	}
}
</script>
<style scoped>
.bonus_loop {
	display: flex;
	flex-wrap: wrap;
}
.items-more {
	display: flex;
	justify-content: center;
	margin-top: var(--l);
	height: 52px;
}
.btn_wrapper {
	max-width: 272px;
	width: 272px;
}
.load_more {
	background: rgba(255, 255, 255, 0.1);
	border-radius: var(--s);
	border: rgba(255, 255, 255, 0.05);
}
.arrow {
	transform: rotate(90deg);
	margin-left: 10px;
}
@media (max-width: 767px) {
	.bonus_item {
		width: 100%;
	}
	.items-more {
		width: 100%;
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
