<script>
	import { Button, Icon } from 'svelte-ux';
	import { faUser, faCake, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
	import { faApple } from '@fortawesome/free-brands-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<main class="p-2 grid place-items-center content-center space-y-2">
	<h1 class="text-2xl font-semibold">A collection of interesting things</h1>
	<h2 class="">In an effort not to starve, please hire me</h2>
	<div class="">
		FontAwesomeIcon: <FontAwesomeIcon icon={faUser} />
	</div>

	<div>
		<Button
			href="https://svelte-ux.techniq.dev"
			target="_blank"
			variant="fill-light"
			color="primary"
		>
			Documentation
		</Button>
		<Button
			href="https://svelte-ux.techniq.dev/customization"
			target="_blank"
			variant="fill-light"
			color="primary"
			icon={faWandMagicSparkles}
		>
			Customization
		</Button>
	</div>
</main>
