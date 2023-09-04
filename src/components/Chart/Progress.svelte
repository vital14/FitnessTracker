<script lang="ts">

	export let actualProgress: number;
	export let objective: number;
	export let color: string;
</script>

<div class="chart-box">
	<div class="pie animate" style="--c:#{color};--p:{(actualProgress / objective) * 100}" />
</div>

<style>
	.chart-box {
		position: relative;
		margin-top: 2.9vh;
		text-align: center;
		width: 100vw;
		height: 24vh;
	}

	@property --p {
		syntax: '<number>';
		inherits: true;
		initial-value: 0;
	}

	.pie {
		--b: 17px;

		width: 47.9vw;
		height: 22.1vh;
		position: relative;
		display: inline-block;
		margin: 5px;
		font-weight: bold;
		font-family: sans-serif;
	}
	.pie:before,
	.pie:after {
		content: '';
		position: absolute;
		border-radius: 50%;
	}
	.pie:before {
		inset: 0;
		background: radial-gradient(farthest-side, var(--c) 98%, #0000) top/var(--b) var(--b) no-repeat,
			conic-gradient(var(--c) calc(var(--p) * 1%), #0000 0);

		mask: radial-gradient(farthest-side, #0000 calc(99% - var(--b)), #000 calc(100% - var(--b)));
	}
	.pie:after {
		inset: calc(50% - var(--b) / 2);
		background: var(--c);
		transform: rotate(calc(var(--p) * 3.6deg)) translateY(calc(50% - 47.9vw / 2));
	}
</style>
