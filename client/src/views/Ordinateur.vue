<template>
	<v-container>
		<datePicker :ordinateurs="ordinateurs" @addDate="selectDate($event)" />

		<v-row>
			<v-col md="4" v-for="(ordinateur, key) in ordinateurs" :key="key">
				<ordinateur :ordinateur="ordinateur" :date="date" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script src="./ordinateur.js" />