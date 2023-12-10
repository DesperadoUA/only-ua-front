import translateMixin from '~/mixins/translate'
import device from '~/mixins/device'
import AText from '~/components/ui/atoms/text'
import AButton from '~/components/ui/atoms/buttons'
import AImg from '~/components/ui/atoms/img'
import ALink from '~/components/ui/atoms/links/'
export default {
    mixins: [translateMixin, device],
    components: { AText, AButton, AImg, ALink },
}
