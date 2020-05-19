<template>
	<div class="main">
		<navbar></navbar>
		<div class="container">
			<transition mode="out-in" name="fade">
				<RouterView />
			</transition>
		</div>
	</div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
	components: {
		Navbar,
	},
};
</script>

<style lang="scss" scoped>
body {
	background-color: #fff;
}
.container {
	padding-left: 0;
	padding-right: 0;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
</style>
