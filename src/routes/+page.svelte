<div class="info">
	<h1>1 dataset 10 visualizations</h1>
	<p class="summary">
		As an educational project, can we create ten visualizations from one simple dataset?
	</p>
	<div>
		<p>The dataset is sourced from the 2022 Digital News Report by the Reuters institute</p>
		<p>
			on misinformation, showing the proportion who saw false or misleading information about each
			topic
		</p>
		<p>in the last week, for selected regions.</p>
	</div>
	<img src="images/data.png" alt="raw data" />
	<div class="footnote">
		<p>Q: Have you seen false or misleading information about any of the</p>
		<p>
			following topics, in the last week? Base: Total sample in each region: Europe = 48,836, North
		</p>
		<p>
			America = 4048, Asia = 20,349, Latin America = 12,104, Africa = 6057. Note: Africa average is
			Kenya,
		</p>
		<p>South Africa, and Nigeria only (English speakers in South Africa and Nigeria).</p>
	</div>
	<a
		class="learn-more"
		href="https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2022/dnr-executive-summary"
		target="_blank"
		rel="noreferrer">Learn more</a
	>
</div>
<div class="charts">
	<a href="/one">#1</a>
	<a href="/two">#2</a>
	<a href="/">#3</a>
	<a href="/">#4</a>
	<a href="/">#5</a>
	<a href="/">#6</a>
	<a href="/">#7</a>
	<a href="/">#8</a>
	<a href="/">#9</a>
	<a href="/">#10</a>
</div>

<style>
	@import url('https://rsms.me/inter/inter.css');

	div,
	h1 {
		color: #414140;
		font-family: 'Inter', sans-serif;
	}

	.summary {
		padding-top: 1.5em;
		padding-bottom: 1.5em;
	}

	img {
		padding: 1.5em 1.5em;
		max-width: 100%;
	}

	@media (min-width: 1100px) {
		img {
			max-width: 50%;
		}
	}

	.info {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	p,
	a {
		text-align: center;
		text-align-last: center;
	}

	.charts {
		display: flex;
		gap: 3em 2em;
		padding: 0.5em 1.5em;
		flex-wrap: wrap;
	}

	.charts a {
		padding: 5em 1.5em;
		flex-grow: 1;
		background-color: rgb(117, 72, 94, 0.2);
		fill-opacity: 0.2;
		color: #75485e;
		font-weight: bold;
		text-decoration: none;
	}

	.charts a:hover {
		text-decoration: underline;
	}

	.learn-more {
		text-decoration: underline;
		color: #75485e;
	}

	.learn-more:hover {
		color: #414140;
	}

	.footnote {
		font-size: 0.8em;
	}
</style>
