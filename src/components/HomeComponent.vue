<template>
  <div class="home">
     <Steps :current="4">
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        <Step title="Over" content="这里是该步骤的描述信息"></Step>
    </Steps>
    <Slider v-model="value1"></Slider>
    <Slider v-model="value2" range></Slider>
    <Slider v-model="value3" range disabled></Slider>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 0,
      value1: 25,
      value2: [20, 50],
      value3: [20, 50]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
