<template lang="pug">
.img-infografica
  .img-infografica__img(:ref="'img-ref-'+mainId")
    slot(name="imagen")
  .img-infografica__content(v-if="elements.length")
    .img-infografica__item(
        v-for="(item, index) in elements"
        :key="'img-infografica-btn-'+item.id"
        :style="[{top: item.y},{left: item.x}]"
        @mouseover="selected = item.id"
        @mouseleave="selected = 0"
        @click="clicked(index)"
      )
      .img-infografica__item__dot(:class="item.color")
    
    .img-infografica__indicador(
      v-if="firstElement && showIndicator"
      :style="[{top: firstElement.y},{left: firstElement.x}]"
    )
      .indicador--hover

  .hidden-slot
    slot
</template>

<script>
import componentSlotMixins from 'ecored-base-pkg/src/mixins/componentSlotMixins'
export default {
  name: 'ImagenInfografica',
  mixins: [componentSlotMixins],
  data: () => ({
    firstSelection: false,
    showIndicator: true,
  }),
  computed: {
    firstElement() {
      return this.elements.length && this.elements[0]
    },
  },
  watch: {
    selected() {
      if (this.showIndicator) {
        this.showIndicator = false
      }
    },
  },
  methods: {
    getCardCords(cardId) {
      const ref = 'card-ref-' + cardId
      if (!(ref in this.$refs)) {
        return [{ top: 0 }, { left: 0 }]
      }
      const currentCard = this.elements.find(card => card.id === cardId)
      const imgElement = this.$refs['img-ref-' + this.mainId]
      const imgObj = {
        w: imgElement.clientWidth,
        h: imgElement.clientHeight,
      }
      const cardElement = this.$refs[ref][0]
      const cardObj = {
        x: parseInt(currentCard.x, 10),
        y: parseInt(currentCard.y, 10),
        w: cardElement.clientWidth,
        h: cardElement.clientHeight,
      }
      const cardPosY = (cardObj.y / 100) * imgObj.h
      const cardPosX = (cardObj.x / 100) * imgObj.w
      const finalObj = []
      if (cardPosY + cardObj.h > imgObj.h) {
        finalObj.push({ bottom: 0 })
      } else {
        finalObj.push({ top: currentCard.y })
      }
      if (cardPosX + cardObj.w > imgObj.w) {
        finalObj.push({ right: 0 })
      } else {
        finalObj.push({ left: currentCard.x })
      }
      return finalObj
    },
    clicked(index) {
      this.$emit('clicked', index)
    },
  },
}
</script>

<style lang="sass"></style>
