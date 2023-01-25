<svelte:head>
	<title>Hunt Companion</title>
	<meta
		name="description"
		content="Hunt Companion is an app to track your encounter statistics"
	/>
</svelte:head>

<section>
	<img class="splash-accent" src="/tooth4tooth.svg" />
	<h1>Hunt'em<br />retaliation</h1>
	<p>The Hunt (Showdown) Companion</p>
</section>

<style>
	:global(body) {
		background-image: url('/splash.webp');
		background-size: cover;
		background-position: 50% 45%;
		backdrop-filter: blur(2px);
	}

	section {
		position: relative;
	}

	.splash-accent {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 375px;
		height: auto;
		z-index: -1;
	}

	@media (min-width: 768px) {
		.splash-accent {
			width: 400px;
		}
	}

	h1 {
		font-size: 64px;
		text-align: center;
		line-height: 1.25;
		margin: 24px;
		color: #EA2B1F;
		letter-spacing: 3px;
	}

	p {
		text-align: center;
	}
</style>
