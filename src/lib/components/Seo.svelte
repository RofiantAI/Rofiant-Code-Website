<script lang="ts">
	let { title, description, path }: { title: string; description: string; path: string } = $props();

	const origin = 'https://code.rofiant.ca';
	const url = $derived(`${origin}${path}`);
	const image = `${origin}/preview1.png`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={url} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Rofiant Code" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={image} />
	<meta property="og:image:width" content="1896" />
	<meta property="og:image:height" content="1030" />
	<meta property="og:image:alt" content="Rofiant Code terminal coding agent" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:image:alt" content="Rofiant Code terminal coding agent" />
</svelte:head>
