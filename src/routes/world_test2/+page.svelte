<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fly } from 'svelte/transition';

	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const progress = tweened(0, {
		duration: 2000,
		easing: cubicOut
	});

	let num = 0;

	let element: any;
	let intersecting: boolean = false;
	$: console.log(intersecting);
	$: if (intersecting) progress.set(10);
	else progress.set(0);
</script>

<main>
	<header class="fixed text-7xl text-red-700 bg-slate-400 rounded-lg m-4 p-2" class:intersecting>
		{intersecting ? 'Element is in view' : 'Element is not in view'}
	</header>

	<div class="h-screen text-9xl bg-slate-900 flex justify-center items-center">Here is content</div>

	<div class="flex flex-row w-1/2 bg-black ml-auto">
		<div>item 1</div>
		<div>item 2</div>
	</div>

	<IntersectionObserver {element} bind:intersecting threshold={0.7}>
		<div
			style="gap: {$progress}rem"
			class="flex flex-row justify-center items-center h-screen"
			bind:this={element}
		>
			{#if intersecting}
				<div
					in:fly={{ x: 1000, duration: 2000 }}
					out:fly={{ x: 1000, duration: 2000 }}
					class="bg-slate-200 text-black rounded-lg p-10"
				>
					ITEM
				</div>
				<div
					in:fly={{ x: 1000, duration: 2000 }}
					out:fly={{ x: 1000, duration: 2000 }}
					class="bg-slate-200 text-black rounded-lg p-10"
				>
					ITEM
				</div>
				<div
					in:fly={{ x: 1000, duration: 2000 }}
					out:fly={{ x: 1000, duration: 2000 }}
					class="bg-slate-200 text-black rounded-lg p-10"
				>
					ITEM
				</div>
				<div
					in:fly={{ x: 1000, duration: 2000 }}
					out:fly={{ x: 1000, duration: 2000 }}
					class="bg-slate-200 text-black rounded-lg p-10"
				>
					ITEM
				</div>
			{/if}
		</div>
	</IntersectionObserver>

	<div class="h-screen text-9xl bg-slate-900 flex justify-center items-center">Here is content</div>
</main>
