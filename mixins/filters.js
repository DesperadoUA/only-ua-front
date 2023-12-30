import { VENDORS_FILTER_KEY, PAYMENTS_FILTER_KEY, LANGS_FILTER_KEY, CURRENCY_FILTER_KEY } from '~/config/filterKeys'
export default {
    data: () => ({
        vendorsFilterKey: VENDORS_FILTER_KEY,
		paymentsFilterKey: PAYMENTS_FILTER_KEY,
		langsFilterKey: LANGS_FILTER_KEY,
		currencyFilterKey: CURRENCY_FILTER_KEY
    })
}
