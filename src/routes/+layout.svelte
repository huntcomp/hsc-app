<script>
	import './styles.css';
</script>

<div class="app">
	<main>
		<slot />
	</main>

	<footer>
		<p>
			<span class="accent">This is <strong>NOT</strong> official Crytek product.</span> “The Hunt Showdown: Companion” is fan-made, free to use,
			non-commercial project. <a href="#"><strong>Read more</strong></a>.
		</p>
	</footer>
</div>

<style>
	footer {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 16px;
		background-color: rgba(14, 15, 21, 0.9);
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14px;
		text-align: center;
	}

	footer > p {
		margin: 0;
	}
</style>
