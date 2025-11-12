<script>
	import { onMount } from 'svelte';

	export let list = [];

	export let strDefault = '/';
	export let strBreak = '/⤸';

	let nameText;
	onMount(() => {
		const resizeNameText = () => {
			let itemList = [...nameText.children];
			let oldOffsetTop = itemList[0].offsetTop;

			itemList.forEach((item) => (item.dataset.content = strBreak));

			itemList.forEach((item, index) => {
				let lastItem = itemList[index - 1];

				if (item.offsetTop > oldOffsetTop) {
					oldOffsetTop = item.offsetTop;

					lastItem.dataset.content = strBreak;
				} else if (lastItem) lastItem.dataset.content = strDefault;
			});
		};

		resizeNameText();

		window.addEventListener('resize', resizeNameText);
		nameText.addEventListener('mousemove', resizeNameText);
		nameText.addEventListener('transitionend', resizeNameText);
	});
</script>

<div class="nameText" bind:this={nameText}>
	{#each list as item}
		<div class="item">
			<a href={item.href}>
				{item.text}
			</a>
		</div>
	{/each}
</div>

<style lang="scss">
	@use '../../../sass/fonts';
	@use '../../../sass/defaults' as defaults;
	@use '../../../sass/palette' as palette;
	@use '../../../sass/gradients' as gradients;

	a {
		text-decoration: inherit;
		color: inherit;
	}

	.nameText {
		margin-bottom: 15px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		align-items: stretch;
		row-gap: 15px;

		.item {
			height: 1.2rem;

			a {
				border-radius: 9999px;
				padding: 5px;
				transition: padding 0.2s;

				&:hover {
					text-decoration: underline;
					background: palette.$primary;
					color: palette.$highlight;
					padding-inline: 15px;
				}
			}

			&::after {
				content: attr(data-content);
				display: inline-block;
				position: relative;
				margin-inline: 5px;
				font-size: 1.1rem;
			}

			&:last-child::after {
				display: none;
			}
		}

		@media (max-width: defaults.$mediaMaxWidth) {
			margin-top: 30px;
		}
	}
</style>
