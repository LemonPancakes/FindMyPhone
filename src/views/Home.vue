<template>
	<ion-content padding>
		<div class="content text">
			<h1
				:class="clicked ? 'fadeOut animated' : ''"
				v-if="!clicked && !searching"
			>
				Find my phone!
			</h1>

			<ion-button
				color="light"
				v-if="!clicked && !searching"
				v-on:click="find()"
			>
				tap here
			</ion-button>

			<h1 v-if="searching">{{ searchingText }}</h1>
			<img
				v-if="searching"
				class="loading-icon"
				src="../assets/magnify.gif"
			/>

			<h1 v-if="clicked && !searching" v-on:click="reset()">
				It's right here.
			</h1>
		</div>
	</ion-content>
</template>

<script lang="ts">
import { IonContent, IonButton } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
	name: "Home",
	components: {
		IonContent,
		IonButton,
	},
	data() {
		return {
			clicked: false,
			searching: false,
			searchingText: "Searching.",
			test: false,
		};
	},
	created() {
		this.reset();
		this.searchingText = "Searching.";
	},
	methods: {
		reset() {
			this.clicked = false;
			this.searching = false;
			this.searchingText = "Searching.";
		},

		find() {
			this.searching = true;
			this.clicked = true;

			setTimeout(() => {
				this.searchingText += ".";
			}, 1000);

			setTimeout(() => {
				this.searchingText += ".";
			}, 2000);

			setTimeout(() => {
				this.searching = false;
			}, 3000);
		},
	},
});
</script>

<style scoped>
ion-content {
	--background: none;
	background-image: url("../assets/background.jpg");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
}
.content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
}

.loading-icon {
	width: 30%;
}

.text {
	font-family: Helvetica;
	font-weight: bold;
	color: white;
}

h1 {
	font-size: 40px;
}
</style>
