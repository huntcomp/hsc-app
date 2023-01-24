<svelte:head>
	<title>Hunt: SC</title>
	<meta
		name="description"
		content="The Hunt Showdown: Companion is an app to track your encounter statistics."
	/>
</svelte:head>

<section>
	<div class="splash-accent" />
	<h1>Hunt'em<br />retaliation</h1>
	<p class="accent">The Hunt Showdown Companion</p>
</section>

<style>
	:global(body) {
		background-image: url('/splash.webp');
		background-size: cover;
		background-position: 50% 45%;
	}

	section {
		position: relative;
	}

	.splash-accent {
		position: absolute;
		top: 45%;
		left: 55%;
		transform: translate(-50%, -50%);
		width: 375px;
		height: 500px;
		clip-path: polygon(89% 0, 0 98%, 66% 76%);
		background-color: rgba(14, 15, 21, 0.9);
		z-index: -1;
	}

	@media (min-width: 768px) {
		.splash-accent {
			width: 400px;
			height: 600px;
		}
	}

	h1 {
		font-size: 64px;
		text-align: center;
		line-height: 1.25;
		margin: 24px;
	}

	p {
		text-align: center;
	}
</style>
