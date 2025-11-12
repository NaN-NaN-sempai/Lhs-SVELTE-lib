<script>
	import LinkList from "./components/LinkList.svelte";
	import PathList from "./components/PathList.svelte";

	/* PathList */
	let author = "Luís Henrique de Almeida";

	export let pathList = [
		{
			text: author,
			href: "https://web.site",
		},
		{
			text: "PAY",
			href: "https://en.wikipedia.org/wiki/Pay",
		},
	];

	export let pathListPlus = [];

	pathList = [...pathList, ...pathListPlus];

	export let socialList = [
		{
			name: "LinkedIn",
			src: "https://www.vectorlogo.zone/logos/linkedin/linkedin-tile.svg",
			href: "https://www.linkedin.com/in/lu%C3%ADs-henrique-de-almeida-949954217/",
		},
		{
			name: "Youtube",
			src: "https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg",
			href: "https://www.youtube.com/@okodadev",
		},
		{
			name: "Github",
			src: "https://raw.githubusercontent.com/simple-icons/simple-icons/refs/heads/master/icons/github.svg",
			href: "https://github.com/NaN-NaN-sempai",
		},
		{
			name: "Instagram",
			src: "https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg",
			href: "https://www.instagram.com/luis_hnrique/",
		},
		{
			name: "NPM",
			src: "https://www.vectorlogo.zone/logos/npmjs/npmjs-tile.svg",
			href: "https://www.npmjs.com/~okoda",
		},
		{
			name: "Stackoverflow",
			src: "https://www.vectorlogo.zone/logos/stackoverflow/stackoverflow-icon.svg",
			href: "https://stackoverflow.com/users/8639520/lu%c3%ads-henrique-de-almeida",
		},
		{
			name: "Steam",
			src: "https://www.vectorlogo.zone/logos/steampowered/steampowered-icon.svg",
			href: "https://steamcommunity.com/id/Okoda/",
		},
		{
			name: "IMDB",
			src: "https://upload.wikimedia.org/wikipedia/commons/c/cc/IMDb_Logo_Square.svg",
			href: "https://www.imdb.com/user/ur174614034/",
		},
	];

	export let socialListPlus = [];

	socialList = [...socialList, ...socialListPlus];

	export let usedList = [
		{
			name: "Figma",
			src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
			href: "https://www.figma.com/",
		},
		{
			name: "Svelte Kit",
			src: "https://www.vectorlogo.zone/logos/sveltetechnology/sveltetechnology-icon.svg",
			href: "https://kit.svelte.dev/",
		},
		{
			name: "Lhs Svelte Lib",
			src: "https://www.vectorlogo.zone/logos/npmjs/npmjs-tile.svg",
			href: "https://www.npmjs.com/package/lhs-svelte-lib",
		},
		{
			name: "SASS",
			src: "https://upload.vectorlogo.zone/logos/sass-lang/images/99450f73-a1a6-4928-9152-3bd38b68adad.svg",
			href: "https://sass-lang.com",
		},
		{
			name: "Vercel",
			src: "https://upload.vectorlogo.zone/logos/vercel/images/c47cbee7-4d4f-439b-95ea-cc8da7809a0a.svg",
			href: "https://vercel.com/",
		},
	];

	export let usedListPlus = [];

	usedList = [...usedList, ...usedListPlus];

	export let madeWith = "Made with";
</script>

<footer>
	<div class="content">
		<div class="title">
			<span>{madeWith}</span>
		</div>

		<LinkList list={usedList} />

		<hr />

		<PathList list={pathList} />

		<hr />

		<LinkList list={socialList} social={true} />
	</div>
</footer>

<style lang="scss">
	@use "../../sass/_fonts";
	@use "../../sass/_defaults" as defaults;
	@use "../../sass/_palette" as palette;
	@use "../../sass/_gradients" as gradients;

	footer {
		width: 100vw;
		text-align: center;
		font-size: 1.2rem;
		background: palette.$secondary;

		color: palette.$highlight;
		overflow: hidden;

		box-shadow: 0 0 30px -10px palette.$tertiary;

		.content {
			padding: 0.75rem;
		}

		hr {
			margin-block: 30px;
			border: 2px solid palette.$highlight;
			border-radius: 9999px;
		}
	}

	.title {
		padding-bottom: 10px;
	}
</style>
