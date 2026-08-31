<script lang="ts">
	let {
		title,
		description,
		center = false
	}: { title: string; description?: string; center?: boolean } = $props();
</script>

<div class="max-w-2xl {center ? 'mx-auto text-center' : ''}">
	<h2
		class="font-(family-name:--font-display) text-[clamp(1.9rem,3.6vw,2.75rem)] leading-[1.15] text-(--color-ink)"
	>
		{title}
	</h2>
	{#if description}
		<p class="mt-4 text-[15.5px] leading-relaxed text-(--color-ink-soft)">{description}</p>
	{/if}
</div>
