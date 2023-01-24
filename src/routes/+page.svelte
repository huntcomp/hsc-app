<script>
	import splash from '$lib/images/splash.webp';
</script>

<svelte:head>
	<title>Hunt: SC</title>
	<meta name="description" content="The Hunt Showdown: Companion is an app to track your encounter statistics." />
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

	.splash-accent {
		position: absolute;
		top: 45%;
		left: 55%;
		transform: translate(-50%, -50%);
		width: 40%;
		height: 70%;
		clip-path: polygon(89% 0, 0 98%, 66% 76%);
		background-color: rgba(14, 15, 21, 0.9);
		z-index: -1;
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
