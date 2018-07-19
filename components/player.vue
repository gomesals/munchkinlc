<template lang="pug">
  div
    el-card.box-card(shadow="hover")
      div.clearfix(slot="header")
        span {{ player.name }}
        el-popover.popover(style="float: right; padding: 3px 0" placement="bottom" v-model="optionsVisible")
          el-input.inputName(v-model="player.name" placeholder="Nome")
          el-button-group
            el-button(size="mini" @click="killPlayer") Morreu
            el-button(size="mini" @click="resetPlayer") Resetar
            el-button(size="mini" @click="$emit('remove', index)") Remover
          el-button(type="text" icon="el-icon-setting" slot="reference")
      .item
        .text Nível
        .buttons
          el-button-group
            el-button(
              size="mini" 
              @click="player.level--"
              :disabled="player.level === 1"
              icon="el-icon-minus"
            )
            el-button(
              size="mini" 
              type="info"
            ) {{ player.level.toString().padStart(2, '0') }}
            el-button(size="mini" icon="el-icon-plus" @click="player.level++")
      .item
        .text Itens
        .buttons
          el-button-group
            el-button(size="mini" icon="el-icon-minus" @click="player.gear--")
            el-button(
              size="mini"
              type="info"
            ) {{ player.gear.toString().padStart(2, '0') }}
            el-button(size="mini" icon="el-icon-plus" @click="player.gear++")
      .footer
        strong.text Total:&nbsp;
        span {{ total.toString().padStart(2, '0') }}
        //- el-popover.popover(placement="bottom" v-model="options")
          el-button-group
            el-button(size="mini" @click="killPlayer") Morreu
            el-button(size="mini" @click="resetPlayer") Resetar
            el-button(size="mini" @click="$emit('remove', index)") Remover
          el-button(type="text" icon="el-icon-setting" slot="reference")
</template>

<script>
export default {
  props: ['player', 'index'],
  data: () => ({ optionsVisible: false }),
  methods: {
    killPlayer() {
      this.player.gear = 0
    },
    resetPlayer() {
      this.player.gear = 0
      this.player.level = 1
    }
  },
  computed: {
    total() {
      return this.player.level + this.player.gear
    }
  }
}
</script>

<style lang="postcss" scoped>
.inputName {
  margin-bottom: 10px;
}
.icon {
  float: right;
  padding: 3px 0;
  margin-left: 50px;
}
.item {
  margin-bottom: 10px;
  text-align: right;
}
.item .text {
  margin-bottom: 5px;
}
.item .buttons {
}
.footer {
  border-top: 1px solid #dee2e6;
  margin-top: 20px;
  padding-top: 10px;
  text-align: right;
}
.footer .popover {
  margin-top: 10px;
}
</style>
