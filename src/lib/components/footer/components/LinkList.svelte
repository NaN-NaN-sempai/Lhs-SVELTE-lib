<script>
	import CompoundImage from './CompoundImage.svelte';
	import { onMount } from 'svelte';
    


	export let list = [];
    export let social = false;

	let container;
	onMount(() => {
		const itensLinerBreak = () => {
			let itemList = [...container.children];
			let oldOffsetTop = itemList[0].offsetTop;

			itemList.forEach((item) => (item.dataset.breakline = false));

			itemList.forEach((item, index) => {
				let lastItem = itemList[index - 1];

				if (item.offsetTop > oldOffsetTop) {
					oldOffsetTop = item.offsetTop;

					lastItem.dataset.breakline = true;
				} else if (lastItem) lastItem.dataset.breakline = false;
			});
		};

		itensLinerBreak();

		window.addEventListener('resize', itensLinerBreak);
		container.addEventListener('mousemove', itensLinerBreak);
		container.addEventListener('transitionend', itensLinerBreak);
	});
</script>

<div class="container" bind:this={container}>
	{#each list as item}
		<div class="item" data-breakline="true">
			<CompoundImage name={item.name} src={item.src} href={item.href} {social} />
		</div>
	{/each}
</div>

<style lang="scss">
	@use '../../../sass/fonts';
	@use '../../../sass/defaults' as defaults;
	@use '../../../sass/palette' as palette;
	@use '../../../sass/gradients' as gradients;

	.container {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		flex-direction: row;
		--gap: 34px;
		gap: var(--gap);
		row-gap: 5px;

		.item {
			position: relative;
			display: flex;
			align-items: center;

			&::after {
				content: '';
				display: block;
				position: absolute;
				right: calc((var(--gap) / 2) * -1);
				width: 0.25rem;
				height: 1rem;
				background: palette.$tertiary;
				border-radius: 10px;
			}

			&[data-breakline='true']::after {
				display: none;
			}

			&:last-child::after {
				display: none;
			}
		}

		@media (max-width: defaults.$mediaMaxWidth) {
			--gap: 5px;

			.item {
				&::after {
					display: none;
				}
			}
		}
	}
</style>
