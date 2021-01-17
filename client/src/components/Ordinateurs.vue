<template>
	<v-card class="mx-auto" max-width="500" outlined>
		<v-list-item three-line>
			<v-list-item-content>
				<v-list-item-title class="headline mb-1 text-center">
					{{ ordinateur.name }}
				</v-list-item-title>
				<v-row>
					<v-col md="4">Heure</v-col>
					<v-col md="4" class="text-center"> Nom </v-col>
					<v-col md="4" class="text-right">Actions</v-col>
				</v-row>
				<div v-for="(horaire, i) in horaires" :key="i">
					<v-row class="d-flex align-center">
						<v-col md="2"> {{ horaire.index }}</v-col>
						<v-col md="8" class="text-center"
							>{{ horaire.attribution.nom }}
						</v-col>
						<v-col md="2" v-if="!horaire.attribution"
							><addAttribution
								:date="date"
								:horaire="horaire.index"
								:ordinateur="ordinateur"
								@addAttribue="update($event)"
						/></v-col>
						<v-col md="2" v-if="horaire.attribution">
							<deleteAttribution
								:ordinateur="ordinateur"
								:attribution="horaire.attribution"
								:horaire="horaire.index"
								@deleteAttribution="deleteAttribution($event)"
							/>
						</v-col>
					</v-row>
				</div>
			</v-list-item-content>
		</v-list-item>
	</v-card>
</template>

<script src='./ordinateur.js' />