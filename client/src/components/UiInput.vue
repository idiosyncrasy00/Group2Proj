<template>
	<transition name="shake" mode="out-in">
		<div class="input-field" :style="{borderBottomColor : focus}">
			<input
				:id="id"
				:type="type"
				:style="style"
				:class="classes"
				:placeholder="placeholder"
				
				:value="modelValue"
				@input="$emit('update:modelValue', $event.target.value)"
				@focus="inputEvent"
				@focusout="inputEvent"
				@keyup="inputEvent"
			>
		</div>
	</transition>
</template>

<script>

export default {
  name: 'UiInput',
  props: ['id','type','style','classes','value','placeholder', 'modelValue'],
	emits: ['update:modelValue'],
	data() {
		return {
			focus: 'black',
		}
	},
	methods: {
		inputEvent(e) {
			console.log(e.target.value);
      this.$emit('inputEvent', e);
			//console.log(this.values)
			if ((e.type == 'focus' || e.type == 'keyup') || e.target.value.length > 0) {
				this.focus = 'blue';
			}
			else {
				this.focus = 'black';
			}
		}
	}
}
</script>

<style lang="scss" scoped>

.input-field {
	padding: 5px 0;

	content: ' ';
	position: relative;
	bottom: 0;
	border-bottom: 1.5px black solid;
}
input, div{
		border: 0;
    outline: 0;
		background-color: transparent;
		font-family: 'San Francisco', 'Segoe UI', 'Roboto', sans-serif;
		font-size: 1em;
		width: 100%;
		color: black;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

transition div {
  transition: border-bottom 0.3s;
}

::placeholder {
	color: rgba(0,0,0,.5);
}
</style>